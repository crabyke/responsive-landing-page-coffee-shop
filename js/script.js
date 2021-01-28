// VARIABLES
const hamburgerMenuEl = document.querySelector(".hamburger");
const topMenuEl = document.querySelector(".top-menu");
// EVENT LISTENERS

// FUNCTIONS

function hamburgerMenu() {
  hamburgerMenuEl.classList.toggle("change");
  topMenuEl.classList.toggle("show");
}

hamburgerMenuEl.addEventListener("click", hamburgerMenu);
