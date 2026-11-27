#!/usr/bin/env python3
import json
import os
import urllib.error
import urllib.request
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from time import monotonic
import re


HOST = "127.0.0.1"
PORT = int(os.environ.get("PORT", "4173"))
MODEL = os.environ.get("OPENAI_MODEL", "gpt-5-nano")
MAX_REQUEST_BYTES = 2048
MAX_CONCEPT_LENGTH = 240
MAX_CONTEXT_LENGTH = 500
RATE_LIMIT_WINDOW_SECONDS = 60
RATE_LIMIT_MAX_REQUESTS = int(os.environ.get("DEFINITION_RATE_LIMIT", "20"))
RATE_LIMIT_MAX_KEYS = int(os.environ.get("DEFINITION_RATE_LIMIT_MAX_KEYS", "500"))
rate_limit_hits = {}
IPV4_WITH_PORT_RE = re.compile(r"^\d{1,3}(?:\.\d{1,3}){3}:\d+$")
SAFE_ADDRESS_RE = re.compile(r"^[a-z0-9:._%-]+$", re.IGNORECASE)
FORWARDED_FOR_RE = re.compile(r'(?:^|;)\s*for=(?:"?)([^;,"]+)', re.IGNORECASE)
LANGUAGE_PROMPTS = {
    "es": {
        "context": "español",
        "instruction": "Responde solo con una definición breve, clara y memorizable en español.",
    },
    "en": {
        "context": "inglés",
        "instruction": "Respond only with one brief, clear, memorable definition in English.",
    },
    "hi": {
        "context": "hindi",
        "instruction": "Respond only with one brief, clear, memorable definition in Hindi.",
    },
    "zh": {
        "context": "chino simplificado",
        "instruction": "Respond only with one brief, clear, memorable definition in Simplified Chinese.",
    },
    "fr": {
        "context": "francés",
        "instruction": "Respond only with one brief, clear, memorable definition in French.",
    },
    "de": {
        "context": "alemán",
        "instruction": "Respond only with one brief, clear, memorable definition in German.",
    },
    "ja": {
        "context": "japonés",
        "instruction": "Respond only with one brief, clear, memorable definition in Japanese.",
    },
    "ko": {
        "context": "coreano",
        "instruction": "Respond only with one brief, clear, memorable definition in Korean.",
    },
    "ar": {
        "context": "árabe",
        "instruction": "Respond only with one brief, clear, memorable definition in Arabic.",
    },
}
DEFAULT_ALLOWED_ORIGINS = {
    f"http://{HOST}:{PORT}",
    f"http://localhost:{PORT}",
}


def get_allowed_origin(origin):
    if not origin:
        return ""

    configured = {
        item.strip()
        for item in os.environ.get("ALLOWED_ORIGINS", "").split(",")
        if item.strip()
    }
    allowed_origins = DEFAULT_ALLOWED_ORIGINS | configured
    return origin if origin in allowed_origins else ""


def normalize_language(language):
    return language if language in LANGUAGE_PROMPTS else "es"


def normalize_client_address(value):
    if not value:
        return ""

    address = value.split(",", 1)[0].strip().strip('"')

    if not address or address.lower() == "unknown" or len(address) > 128:
        return ""

    if address.startswith("["):
        closing_index = address.find("]")
        address = address[1:closing_index if closing_index > 0 else None]
    elif IPV4_WITH_PORT_RE.match(address):
        address = address.rsplit(":", 1)[0]

    return address if SAFE_ADDRESS_RE.match(address) else ""


def get_forwarded_address(headers):
    forwarded = headers.get("Forwarded", "")
    match = FORWARDED_FOR_RE.search(forwarded.split(",", 1)[0])
    return normalize_client_address(match.group(1) if match else "")


def prune_rate_limit_hits(now):
    expired_keys = [
        key
        for key, hit in rate_limit_hits.items()
        if now - hit["started_at"] > RATE_LIMIT_WINDOW_SECONDS
    ]

    for key in expired_keys:
        rate_limit_hits.pop(key, None)

    if len(rate_limit_hits) <= RATE_LIMIT_MAX_KEYS:
        return

    oldest_keys = sorted(
        rate_limit_hits,
        key=lambda key: rate_limit_hits[key]["started_at"],
    )[: len(rate_limit_hits) - RATE_LIMIT_MAX_KEYS]

    for key in oldest_keys:
        rate_limit_hits.pop(key, None)


class FlipCardHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        allowed_origin = get_allowed_origin(self.headers.get("Origin", ""))

        if allowed_origin:
            self.send_header("Access-Control-Allow-Origin", allowed_origin)
            self.send_header("Vary", "Origin")

        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        super().end_headers()

    def do_OPTIONS(self):
        if self.path != "/api/definition":
            self.send_error(404)
            return

        self.send_response(204)
        self.end_headers()

    def do_GET(self):
        if self.path == "/api/definition":
            api_key = os.environ.get("OPENAI_API_KEY", "").strip()
            if not api_key:
                self.write_json({"ok": False, "configured": False})
                return
            self.write_json({"ok": True, "configured": True})
            return

        super().do_GET()

    def do_POST(self):
        if self.path != "/api/definition":
            self.send_error(404)
            return

        if self.is_request_too_large():
            self.write_json({"error": "Solicitud demasiado grande"}, status=413)
            return

        api_key = os.environ.get("OPENAI_API_KEY", "").strip()
        if not api_key:
            self.write_json({"error": "Falta OPENAI_API_KEY"}, status=503)
            return

        if not self.check_rate_limit():
            self.write_json({"error": "Demasiadas solicitudes; intenta más tarde"}, status=429)
            return

        try:
            payload = self.read_json()
            concept = validate_field_length(str(payload.get("concept", "")).strip(), MAX_CONCEPT_LENGTH, "concepto")
            standard = validate_field_length(str(payload.get("standard", "")).strip(), MAX_CONTEXT_LENGTH, "estándar")
            alternate_term = validate_field_length(str(payload.get("alternateTerm", "")).strip(), MAX_CONTEXT_LENGTH, "término equivalente")
            language = normalize_language(payload.get("language"))
        except json.JSONDecodeError:
            self.write_json({"error": "Solicitud inválida"}, status=400)
            return
        except ValueError as error:
            self.write_json({"error": str(error)}, status=400)
            return

        if not concept:
            self.write_json({"error": "Falta el concepto"}, status=400)
            return

        try:
            definition = generate_definition(api_key, concept, standard, language, alternate_term)
            self.write_json({"definition": definition, "language": language})
        except urllib.error.HTTPError as error:
            error.read()
            self.write_json({"error": "No se pudo generar la definición; intenta de nuevo"}, status=502)
        except Exception:
            self.write_json({"error": "No se pudo generar la definición; intenta de nuevo"}, status=502)

    def read_json(self):
        length = int(self.headers.get("Content-Length", "0"))
        raw_body = self.rfile.read(length)
        return json.loads(raw_body.decode("utf-8"))

    def is_request_too_large(self):
        try:
            return int(self.headers.get("Content-Length", "0")) > MAX_REQUEST_BYTES
        except ValueError:
            return True

    def check_rate_limit(self):
        now = monotonic()
        prune_rate_limit_hits(now)
        key = self.get_client_key()
        hit = rate_limit_hits.get(key, {"count": 0, "started_at": now})

        if now - hit["started_at"] > RATE_LIMIT_WINDOW_SECONDS:
            rate_limit_hits[key] = {"count": 1, "started_at": now}
            prune_rate_limit_hits(now)
            return True

        hit["count"] += 1
        rate_limit_hits[key] = hit
        prune_rate_limit_hits(now)
        return hit["count"] <= RATE_LIMIT_MAX_REQUESTS

    def get_client_key(self):
        for header in (
            "X-Nf-Client-Connection-Ip",
            "Cf-Connecting-Ip",
            "True-Client-Ip",
            "X-Real-IP",
            "X-Forwarded-For",
        ):
            address = normalize_client_address(self.headers.get(header, ""))
            if address:
                return address

        return get_forwarded_address(self.headers) or (
            self.client_address[0] if self.client_address else "local"
        )

    def write_json(self, payload, status=200):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


def generate_definition(api_key, concept, standard="", language="es", alternate_term=""):
    context_lines = []

    if standard:
        context_lines.append(f"Estándar o disciplina: {standard}")

    if alternate_term:
        context_lines.append(f"Término equivalente: {alternate_term}")

    language_prompt = LANGUAGE_PROMPTS.get(language, LANGUAGE_PROMPTS["es"])
    context_lines.append(f"Idioma de respuesta: {language_prompt['context']}")
    context = "\n".join(context_lines)
    definition_instruction = language_prompt["instruction"]
    body = {
        "model": MODEL,
        "reasoning": {"effort": "minimal"},
        "instructions": (
            "Generate educational definitions for flipcards. "
            f"{definition_instruction} "
            "If a standard, discipline, or equivalent term is provided, use that context without translating acronyms unnecessarily. "
            "Do not use lists, markdown, or introductions."
        ),
        "input": f"Concepto: {concept}\n{context}",
        "max_output_tokens": 180,
        "store": False,
    }

    request = urllib.request.Request(
        "https://api.openai.com/v1/responses",
        data=json.dumps(body).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        method="POST",
    )

    with urllib.request.urlopen(request, timeout=30) as response:
        data = json.loads(response.read().decode("utf-8"))

    return extract_text(data)


def validate_field_length(value, max_length, field_name):
    if len(value) > max_length:
        raise ValueError(f"{field_name} supera el límite permitido")
    return value


def extract_text(data):
    if data.get("output_text"):
        return data["output_text"].strip()

    parts = []
    for item in data.get("output", []):
        for content in item.get("content", []):
            text = content.get("text")
            if text:
                parts.append(text)

    definition = " ".join(parts).strip()
    if not definition:
        raise ValueError("La IA no devolvió texto")
    return definition


if __name__ == "__main__":
    print(f"FlipCards en http://{HOST}:{PORT}/index.html")
    print(f"Modelo IA: {MODEL}")
    ThreadingHTTPServer((HOST, PORT), FlipCardHandler).serve_forever()
