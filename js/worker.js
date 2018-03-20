// Listen for install event, set callback
self.addEventListener('install', function(event) {
    event.waitUntil(
        // Open the cache
        caches.open(cacheName).then(function(cache) {
          return cache.addAll(
            [
              '/css/styles.css',
              '/js/dbhelper.js',
              '/js/main.js',
              '/index.html',
            ]
          );
        })
      );
});

self.addEventListener('activate', function(event) {
    // Perform some task
  });