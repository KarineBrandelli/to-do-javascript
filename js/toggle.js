import { toggle } from "./dom.js";

const useDark = window.matchMedia("(prefers-color-scheme: dark)");

function toggleDarkMode(state) {
  document.documentElement.classList.toggle("dark-mode", state);
}