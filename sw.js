/* Mein Deutschweg offline cache.
   Course files are precached on install; every request is served from the cache first and refreshed in the background,
   so the app opens without internet and picks up new content on the next visit. Bump VERSION when the file list changes. */
const VERSION = 'dw-v5-2';
const FILES = ['./', 'index.html', 'app.js', 'manifest.webmanifest',
  'data/a1-1.js', 'data/a1-2.js', 'data/a2-1.js', 'data/a2-2.js', 'data/b1-1.js', 'data/b1-2.js', 'data/b2-1.js', 'data/b2-2.js', 'data/tools.js',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png', 'icons/apple-touch-icon.png', 'icons/favicon.png'];
const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES.map(f => new Request(f, { cache: 'reload' })))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET') return; // LanguageTool checks etc. go straight to the network
  const same = url.origin === location.origin;
  if (!same && !FONT_HOSTS.includes(url.hostname)) return;
  e.respondWith(caches.open(VERSION).then(async c => {
    const hit = await c.match(req, { ignoreSearch: same }) || (req.mode === 'navigate' ? await c.match('./') : null);
    const fresh = fetch(req).then(res => { if (res.ok || res.type === 'opaque') c.put(req, res.clone()); return res; }).catch(() => null);
    if (hit) { e.waitUntil(fresh); return hit; }
    return (await fresh) || new Response('Offline', { status: 503, statusText: 'Offline' });
  }));
});
