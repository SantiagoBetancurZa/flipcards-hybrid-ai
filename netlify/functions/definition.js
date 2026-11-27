import { GET, OPTIONS, POST } from "../../api/definition.js";

const handlers = { GET, OPTIONS, POST };

const getRequestUrl = (event) => {
  if (event.rawUrl) {
    return event.rawUrl;
  }

  const host = event.headers?.host || "flipcards-mobile-android-preview.netlify.app";
  const path = event.path || "/api/definition";
  const query = event.rawQuery ? `?${event.rawQuery}` : "";

  return `https://${host}${path}${query}`;
};

const getRequestBody = (event) => {
  if (!event.body || event.httpMethod === "GET" || event.httpMethod === "HEAD") {
    return undefined;
  }

  return event.isBase64Encoded
    ? Buffer.from(event.body, "base64")
    : event.body;
};

const toNetlifyResponse = async (response) => ({
  statusCode: response.status,
  headers: Object.fromEntries(response.headers.entries()),
  body: await response.text(),
});

export const handler = async (event) => {
  const method = (event.httpMethod || "GET").toUpperCase();
  const routeHandler = handlers[method];

  if (!routeHandler) {
    return {
      statusCode: 405,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ error: "Metodo no permitido" }),
    };
  }

  const request = new Request(getRequestUrl(event), {
    method,
    headers: event.headers || {},
    body: getRequestBody(event),
  });

  return toNetlifyResponse(await routeHandler(request));
};
