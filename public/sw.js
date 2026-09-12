// Retire the old cache-first worker so page updates and 404 responses stay fresh.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith('pvs-decore'))await caches.delete(key);await self.registration.unregister();})()));
