/*
 * FlipCards service worker — conservative offline layer.
 *
 * Goals:
 *  - Never break a fresh deploy: navigations are network-first, so new HTML
 *    (and the new ?v= asset URLs it references) are picked up immediately.
 *  - Work offline after the first online visit: same-origin GETs are cached
 *    with a stale-while-revalidate strategy keyed on the full URL (so the
 *    existing ?v= cache-busting keeps working).
 *  - Stay out of the way of AI traffic: Firebase AI Logic, App Check and
 *    reCAPTCHA are cross-origin and never touched; /api/* stays network-only.
 *
 * Bump CACHE_VERSION whenever the offline contract changes; activate() purges
 * every older cache so devices self-heal on the next launch.
 */
const CACHE_VERSION = "flipcards-hybrid-v1";
const OFFLINE_FALLBACK = "index.html";
const PRECACHE_URLS = ["index.html"];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .catch(() => {})
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_VERSION)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

const putInCache = (request, response) => {
  if (response && response.status === 200 && response.type === "basic") {
    const copy = response.clone();
    caches
      .open(CACHE_VERSION)
      .then((cache) => cache.put(request, copy))
      .catch(() => {});
  }
  return response;
};

const shouldBypassCache = (request, url) =>
  request.cache === "no-store"
  || url.pathname.startsWith("/data/standards/");

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);

  // Only manage our own origin; never touch the AI endpoint.
  if (url.origin !== self.location.origin || url.pathname.startsWith("/api/")) {
    return;
  }

  if (shouldBypassCache(request, url)) {
    event.respondWith(fetch(request));
    return;
  }

  // Navigations: network-first, fall back to the cached shell when offline.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches
            .open(CACHE_VERSION)
            .then((cache) => cache.put(OFFLINE_FALLBACK, copy))
            .catch(() => {});
          return response;
        })
        .catch(() =>
          caches
            .match(request)
            .then((hit) => hit || caches.match(OFFLINE_FALLBACK))
        )
    );
    return;
  }

  // Everything else same-origin: stale-while-revalidate.
  event.respondWith(
    caches.match(request).then((cached) => {
      const networked = fetch(request)
        .then((response) => putInCache(request, response))
        .catch(() => cached);
      return cached || networked;
    })
  );
});
