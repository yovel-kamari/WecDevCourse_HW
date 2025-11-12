// skin.js
// Cycle through CSS skins on each button click

// List of available CSS files to cycle
const skins = ["basic.css", "modern.css", "dark.css"];

// Restore last selection if exists
const saved = localStorage.getItem("skinIndex");
let i = saved ? parseInt(saved, 10) : 0;

// Apply current skin
function applySkin() {
  // Find <link id="skin"> and update href
  const link = document.getElementById("skin");
  if (link) link.href = skins[i];
  // Persist selection
  localStorage.setItem("skinIndex", i);
}

// On load, apply saved skin
document.addEventListener("DOMContentLoaded", applySkin);

// Button click handler
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("skinToggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    i = (i + 1) % skins.length; // next skin, loop back to first
    applySkin();                // switch stylesheet
  });
});
