const CACHE_NAME = 'quran-viewer-cache-v1';
const OFFLINE_URL = '/QuranIframeViewer/';
const ASSETS_TO_CACHE = [
  OFFLINE_URL,
  'manifest.json',
  'icon.png',
  // your main CSS/JS files:
  'styles.css',
  'app.js'
];

// Install event – cache essential assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(self.skipWaiting())
  );
});

// Activate event – clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch event – serve from cache, then network, falling back to offline
self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);

  // Always try cache first for same-origin requests
  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(req).then(cachedRes =>
        cachedRes || fetch(req).then(networkRes => {
          // Cache new asset
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(req, networkRes.clone());
            return networkRes;
          });
        })
      ).catch(() => caches.match(OFFLINE_URL))
    );
  } else {
    // For cross-origin (e.g. your iframe), try network first, then cache
    event.respondWith(
      fetch(req).then(networkRes => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(req, networkRes.clone());
          return networkRes;
        });
      }).catch(() => caches.match(req))
    );
  }
});
