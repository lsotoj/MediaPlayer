
import MediaPlayer from  './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

const button = document.querySelector(".playPause");
const mute = document.querySelector(".mute");
button.onclick = () => player.tooglePlay();
mute.onclick = () => console.log("muted");