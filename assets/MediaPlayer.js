function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    console.log('OBJETO CREADO')
}

MediaPlayer.prototype.play = function() {
    this.media.play();
}
MediaPlayer.prototype.pause = function() {
    this.media.pause();
};

MediaPlayer.prototype.tooglePlay = function() {
    if(this.media.paused) {
        this.play();
    } else {
        this.pause();
    }
};

export default MediaPlayer;