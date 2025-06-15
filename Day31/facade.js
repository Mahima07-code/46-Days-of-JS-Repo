// ✅ Facade Pattern

class VideoPlayer {
  loadFile(file) {
    console.log(`Loading ${file}`);
  }

  play() {
    console.log("Playing video");
  }

  pause() {
    console.log("Pausing video");
  }

  startMovie(file) {
    this.loadFile(file);
    this.play();
  }
}

const player = new VideoPlayer();
player.startMovie("movie.mp4");
