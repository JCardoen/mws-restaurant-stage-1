const cacheName = 'restaurants-cache-v3';

// Listen for install event, set callback
self.addEventListener('install', function (event) {
    event.waitUntil(
        // Open the cache
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(
                [
                    '/css/styles.css',
                    '/data/restaurants.json',
                    '/js/dbhelper.js',
                    '/js/main.js',
                    '/js/restarurant_info.js',
                    '/restarurant.html',
                    '/img/1.jpg',
                    '/img/2.jpg',
                    '/img/3.jpg',
                    '/img/4.jpg',
                    '/img/5.jpg',
                    '/img/6.jpg',
                    '/img/7.jpg',
                    '/img/8.jpg',
                    '/img/9.jpg',
                    '/img/10.jpg',
                    '/index.html',
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