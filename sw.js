self.addEventListener('install', event => {
    event.waitUntil(precache());
});

async function precache () {
   const cache = await caches.open('v1');
  
   return cache.addAll([
       '/',
       '/index.html',
       '/assets/MediaPlayer.js',
       '/assets/plugins/AutoPlay.js',
       '/assets/plugins/AutoPause.js',
       '/assets/index.js',
       '/assets/ajercicio.mp4',
   ]);
}