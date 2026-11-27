#!/usr/bin/env python3
"""Local static server for FlipCards development.

All AI runs in the browser through Firebase AI Logic (Gemini Nano on the
device, Gemini in the cloud), so this server only serves files. It disables
caching so edits show up on reload.
"""
import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

HOST = os.environ.get("HOST", "127.0.0.1")
PORT = int(os.environ.get("PORT", "4173"))


class FlipCardsHandler(SimpleHTTPRequestHandler):
    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        ".js": "text/javascript",
        ".mjs": "text/javascript",
        ".json": "application/json",
        ".webmanifest": "application/manifest+json",
    }

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        super().end_headers()


def main():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    server = ThreadingHTTPServer((HOST, PORT), FlipCardsHandler)
    print(f"FlipCards running at http://localhost:{PORT}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
