// let staticCacheName = 'pwa';

// importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');
importScripts('https://cdnjs.cloudflare.com/ajax/libs/workbox-sw/7.0.0/workbox-sw.js')

// self.addEventListener('install', function (e) {
//     e.waitUntil(
//         caches.open(staticCacheName).then(function (cache) {
//             return cache.addAll(['./index.html']);
//         })
//     );
// });


workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.NetworkFirst()

)