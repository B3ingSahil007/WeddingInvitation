// High-fidelity Audio Player for wedding background music
// Plays /music.mp3 from the public folder with loop, volume control, and fallback support

class WeddingAudioEngine {
  constructor() {
    this.audio = null;
    this.isPlaying = false;
    this.volume = 0.7;
    this.isInitialized = false;
  }

  initAudio() {
    if (this.isInitialized && this.audio) return;

    try {
      this.audio = new Audio('/music.mp3');
      this.audio.loop = true;
      this.audio.volume = this.volume;
      this.audio.preload = 'auto';

      // Fallback if /music.mp3 fails
      this.audio.addEventListener('error', () => {
        if (this.audio && !this.audio.src.includes('/images/music.mp3')) {
          console.warn('Primary music source failed, falling back to /images/music.mp3');
          this.audio.src = '/images/music.mp3';
          if (this.isPlaying) {
            this.audio.play().catch((e) => console.log('Audio retry notice:', e));
          }
        }
      });

      this.audio.addEventListener('play', () => {
        this.isPlaying = true;
      });

      this.audio.addEventListener('pause', () => {
        this.isPlaying = false;
      });

      this.audio.addEventListener('ended', () => {
        // If not looping for any reason, restart
        if (this.audio.loop) {
          this.audio.currentTime = 0;
          this.audio.play().catch(() => {});
        }
      });

      this.isInitialized = true;
    } catch (err) {
      console.warn('Error initializing audio:', err);
    }
  }

  play() {
    this.initAudio();
    if (!this.audio) return;

    const playPromise = this.audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isPlaying = true;
        })
        .catch((err) => {
          console.warn('Audio play prevented or waiting for interaction:', err);
          this.isPlaying = false;
        });
    }
  }

  pause() {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  toggle() {
    if (!this.isInitialized || !this.audio) {
      this.play();
      return true;
    }

    if (this.audio.paused) {
      this.play();
      return true;
    } else {
      this.pause();
      return false;
    }
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.audio) {
      this.audio.volume = this.volume;
    }
  }
}

export const weddingAudio = new WeddingAudioEngine();
