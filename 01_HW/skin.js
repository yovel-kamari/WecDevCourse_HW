// skin.js
// Cycle through CSS skins on each button click

// List of available CSS files in SKINS folder
const skins = [
  "SKINS/basic.css",
  "SKINS/modern.css",
  "SKINS/dark.css"
];

// Restore last selection if exists
const saved = localStorage.getItem("skinIndex");
let i = saved ? parseInt(saved, 10) : 0;

// Apply current skin
function applySkin() {
  const link = document.getElementById("skin");
  if (link) link.href = skins[i];
  localStorage.setItem("skinIndex", i);
}

// On load, apply saved skin
document.addEventListener("DOMContentLoaded", applySkin);

// Button click handler
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("skinToggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    i = (i + 1) % skins.length; // Move to next skin
    applySkin();                // Switch stylesheet
  });
});
