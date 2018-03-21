const cacheName = 'restaurants-cache-v4';

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
                    '/js/restaurant_info.js',
                    '/restaurant.html',
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
        }).catch(() => console.log('ERROR'))
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        cashes.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('activate', function (event) {
    
});