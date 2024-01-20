import * as timer from "./timer.js";
import * as elements from "./elements.js";
import state from "./state.js";
import { playSound } from "./sounds.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");
  sounds.buttonPressAudio.play();
  timer.countdown();
}

export function reset() {
  state.isRunning = document.documentElement.classList.remove("running");
  state.isRunning = false;
  sounds.buttonPressAudio.play();
  timer.updateDisplay();
}

export function set() {
  elements.minutes.setAttribute("contenteditable", true);
  elements.minutes.focus();
}

export function addTime() {
  state.minutes = (state.minutes + 5) % 60;
  sounds.buttonPressAudio.play();

  timer.updateDisplay();
}

export function subTime() {
  if (state.minutes - 5 >= 0) {
    state.minutes -= 5;
  }

  sounds.buttonPressAudio.play();
  timer.updateDisplay();
}

/* SOUND CONTROLS */

export function natureSound() {
  resetButtonColors();
  document.getElementById("nature").style.backgroundColor =
    "var(--bg-card-nature)";
  playSound(sounds.natureSound);
}

export function rainSound() {
  resetButtonColors();
  document.getElementById("rain").style.backgroundColor = "var(--bg-card-rain)";
  playSound(sounds.rainSound);
}

export function coffeSound() {
  resetButtonColors();
  document.getElementById("coffe").style.backgroundColor =
    "var(--bg-card-coffe)";
  playSound(sounds.coffeSound);
}

export function flameSound() {
  resetButtonColors();
  document.getElementById("flame").style.backgroundColor =
    "var(--bg-card-flame)";
  playSound(sounds.flameSound);
}

function resetButtonColors() {
  const buttons = document.querySelectorAll(".cards-sounds");
  buttons.forEach((btn) => {
    btn.style.backgroundColor = "";
  });
}
