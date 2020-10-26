class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlugins();
  }
  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }

  play() {
    this.media.play();
  }

  pause() {
    this.media.pause();
  }

  tooglePlay() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }
  muteUnmute() {
    if (this.media.muted) {
      this.media.muted = false;
    } else {
      this.media.muted = true;
    }
  }
  mute() {
    this.media.muted = true;
  }
  unmute() {
    this.media.muted = false;
  }
}


export default MediaPlayer;
