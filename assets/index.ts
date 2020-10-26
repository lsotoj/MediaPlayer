import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from   "./plugins/AutoPause";

const video = document.querySelector("video");

const player = new MediaPlayer({ el: video, 
    plugins: [new AutoPlay(), new AutoPause()] 
});

const button: HTMLElement = document.querySelector(".playPause");
const mute: HTMLElement = document.querySelector(".mute");
button.onclick = () => player.tooglePlay();
mute.onclick = () => player.muteUnmute();

if('serviceWorker' in navigator) {  
    navigator.serviceWorker.register('/sw.ts')
    .then(() => console.log("ServiceWorker created"))
    .catch(error => {
        console.log(error.message);
    })
}
