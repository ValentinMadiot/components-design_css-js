const text = "Bienvenue sur mon site !";
const target = document.getElementById("reveal-text");
let index = 0;

function typeText() {
  if (index < text.length) {
    target.textContent += text[index];
    index++;
    setTimeout(typeText, 50); // délai entre chaque lettre
  }
}

typeText();

const fadeText = document.getElementById("fade-text");
setTimeout(() => {
  fadeText.classList.add("visible");
}, 300); // délai avant apparition
