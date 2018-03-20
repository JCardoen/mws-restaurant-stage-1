const cacheName = 'restaurants-cache-v2';

// Listen for install event, set callback
self.addEventListener('install', function (event) {
    event.waitUntil(
        // Open the cache
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(
                [
                    '/css/*',
                    '/img/*',
                    '/js/*',
                    '/data/*',
                    '/index.html',
                    '/restaurant.html'
                ]
            );
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        cashes.match(event.request).then(function(response) {
            return response || tch(event.request);
        })
    );
});

self.addEventListener('activate', function (event) {
    // Delete previous caches
    event.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(keyList.map(key => {
                if (key !== cacheName) {
                    return caches.delete(key);
                }
            }))
        })
    )
});