const CACHE_NAME = 'strategic-minds-advisory-v1';
const CORE_ASSETS = ['/', '/services', '/packages', '/how-it-works', '/about', '/schedule', '/login', '/payment', '/dashboard', '/api/health', '/manifest.json', '/icon.svg', '/apple-touch-icon.svg'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const accept = request.headers.get('accept') || '';
  const isDocument = accept.includes('text/html');

  event.respondWith(
    fetch(request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        return response;
      })
      .catch(async () => {
        const cached = await caches.match(request);
        if (cached) return cached;
        if (isDocument) return (await caches.match('/')) || Response.error();
        return (await caches.match('/')) || Response.error();
      })
  );
});
