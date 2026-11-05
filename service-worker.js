const CACHE_NAME="dragon-island-epic-audio-v4";
const FILES=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png","./epic-world.jpg","./fire-dragon.jpg"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{const cp=r.clone();caches.open(CACHE_NAME).then(x=>x.put(e.request,cp));return r}).catch(()=>caches.match("./index.html"))) )});
