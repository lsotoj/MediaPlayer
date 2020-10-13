import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from   "./plugins/AutoPause.js";

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video, 
    plugins: [new AutoPlay(), new AutoPause()] 
});

const button = document.querySelector(".playPause");
const mute = document.querySelector(".mute");
button.onclick = () => player.tooglePlay();
mute.onclick = () => player.muteUnmute();

if('serviceWorker' in navigator) {  
    navigator.serviceWorker.register('/sw.js')
    .then(() => console.log("ServiceWorker created"))
    .catch(error => {
        console.log(error.message);
    })
}
