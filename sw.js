// sw.js
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-audio-cache').then((cache) => {
            return cache.addAll([
                'http://your-icecast-server:8000/stream', // Cache the Icecast stream
                // Add other assets you want to cache (CSS, JS, images, etc.)
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
