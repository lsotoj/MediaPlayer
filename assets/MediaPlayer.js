function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    
    this._initplugins();
}

MediaPlayer.prototype._initplugins = function() {
    this.plugins.forEach(plugin => {
        plugin.run(this)
    })
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

MediaPlayer.prototype.muteUnmute = function() {
    if(this.media.muted) {
        this.media.muted = false;
    } else {
        this.media.muted = true;
    }
}

MediaPlayer.prototype.mute = function() {
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function() {
    this.media.muted = false;
}

export default MediaPlayer;