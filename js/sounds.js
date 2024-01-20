export const buttonPressAudio = new Audio("./assets/button-press.wav");
export const kitchenTimer = new Audio("./assets/kitchen-timer.mp3");

export const natureSound = new Audio("./assets/Floresta.wav");
export const rainSound = new Audio("./assets/Chuva.wav");
export const coffeSound = new Audio("./assets/Cafeteria.wav");
export const flameSound = new Audio("./assets/Lareira.wav");

natureSound.loop = true
rainSound.loop = true
coffeSound.loop = true
flameSound.loop = true

let soundPlaying = null;

export function playSound(sound) {
  if (soundPlaying === sound && !sound.paused) {
    sound.pause();
  } else {
    if (soundPlaying && !soundPlaying.paused) {
      soundPlaying.pause();
      soundPlaying.currentTime = 0;
    }

    sound.play();
    soundPlaying = sound;
  }
}