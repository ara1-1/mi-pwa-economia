self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("pwa-cache").then(cache => {
      return cache.addAll([
        "/mi-pwa-economia/",
        "/mi-pwa-economia/index.html",
        "/mi-pwa-economia/manifest.json",
        "/mi-pwa-economia/icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});


