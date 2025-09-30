// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation
cancelBtn.onclick = hideNavMenu;

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});


// Text Animation

const textElement = document.querySelector(".text-three");
const texts = [
  "UI/UX Designer Enthusiast",
  "Graphic Design Enthusiast",
  "Digital Artist"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 60;
let deletingSpeed = 30;
let delayBetweenWords = 1500;

function typeEffect() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    // Ngetik
    textElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      // selesai ketik, tunggu sebentar
      isDeleting = true;
      setTimeout(typeEffect, delayBetweenWords);
      return;
    }
  } else {
    // Menghapus
    textElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  const speed = isDeleting ? deletingSpeed : typingSpeed;
  setTimeout(typeEffect, speed);
}

window.onload = typeEffect;