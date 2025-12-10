// ================================
// 🧠 Service Worker - Soul Send
// ================================

// 🔄 Versão do cache (mude a cada build/deploy)
const CACHE_VERSION = "v0.1";
const CACHE_NAME = `mais-tech-${CACHE_VERSION}`;

// 🕒 Tempos de expiração
const HTML_TTL = 6 * 60 * 60 * 1000; // 6 horas
const ASSET_TTL = 7 * 24 * 60 * 60 * 1000; // 7 dias

// 🔗 URLs a serem pré-carregadas
const urlsToCache = [
  "/",
  "/sobre",
  "/suporte",
  "/favicon.ico",
  "/site.webmanifest",
  "/images/og_image.png"
];

// ================================
// 📦 Funções auxiliares
// ================================

// Define se o request é um arquivo HTML ou asset
function isHTMLRequest(request) {
  return request.destination === "document" || request.mode === "navigate";
}

// Verifica se o cache expirou
async function isCacheExpired(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);
  if (!cachedResponse) return true;

  const timestamp = cachedResponse.headers.get("sw-cache-timestamp");
  if (!timestamp) return true;

  const cachedTime = parseInt(timestamp, 10);
  const now = Date.now();

  const ttl = isHTMLRequest(request) ? HTML_TTL : ASSET_TTL;
  return now - cachedTime > ttl;
}

// Salva uma resposta no cache com timestamp
async function saveToCache(request, response) {
  const cache = await caches.open(CACHE_NAME);
  const headers = new Headers(response.headers);
  headers.set("sw-cache-timestamp", Date.now().toString());
  const newResponse = new Response(await response.blob(), {
    status: response.status,
    statusText: response.statusText,
    headers
  });
  await cache.put(request, newResponse.clone());
  return newResponse;
}

// ================================
// ⚙️ Instalação do Service Worker
// ================================
self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      for (const url of urlsToCache) {
        const response = await fetch(url);
        await saveToCache(url, response);
      }
    })
  );
});

// ================================
// 🚀 Ativação e limpeza de versões antigas
// ================================
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })()
  );
  self.clients.claim();
});

// ================================
// 🌐 Interceptação de Requests
// ================================
self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(event.request);
      const expired = await isCacheExpired(event.request);

      if (cachedResponse && !expired) {
        // Serve cache válido
        return cachedResponse;
      }

      try {
        // Busca nova versão da rede
        const networkResponse = await fetch(event.request);
        // Salva e retorna
        return await saveToCache(event.request, networkResponse);
      } catch (error) {
        // Se offline, tenta fallback
        if (cachedResponse) return cachedResponse;
        return caches.match("/");
      }
    })()
  );
});
