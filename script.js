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
if (textElement) {
  // prepare inner element for typed text (keep element structure predictable)
  textElement.innerHTML = `<span class="text-content"></span>`;
  const textContent = textElement.querySelector(".text-content");

  const texts = [
    "UI/UX Designer Enthusiast",
    "Graphic Design Enthusiast",
    "Digital Artist"
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 60;
  const deletingSpeed = 30;
  const delayBetweenWords = 1500;

  // ensure caret visible (static) initially
  textElement.classList.add("caret-visible");

  function typeEffect() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      // TYPING
      charIndex++;
      textContent.textContent = currentText.slice(0, charIndex);

      // static caret while typing
      textElement.classList.add("caret-visible");
      textElement.classList.remove("caret-blink");

      if (charIndex === currentText.length) {
        // finished typing: start blink during the pause, then begin deleting
        textElement.classList.add("caret-blink");
        setTimeout(() => {
          // stop blink and begin deleting
          textElement.classList.remove("caret-blink");
          textElement.classList.add("caret-visible");
          isDeleting = true;
          // start delete after tiny delay so UX feels natural
          setTimeout(typeEffect, deletingSpeed);
        }, delayBetweenWords);
        return; // exit to avoid scheduling another immediate tick
      } else {
        setTimeout(typeEffect, typingSpeed);
      }
    } else {
      // DELETING
      charIndex--;
      // keep substring safe (charIndex could be 0)
      textContent.textContent = currentText.slice(0, Math.max(0, charIndex));

      // static caret while deleting
      textElement.classList.add("caret-visible");
      textElement.classList.remove("caret-blink");

      if (charIndex <= 0) {
        // finished deleting: move to next text
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(typeEffect, typingSpeed);
      } else {
        setTimeout(typeEffect, deletingSpeed);
      }
    }
  }

  // start
  window.addEventListener("load", () => {
    // small delay to allow fonts/layout to settle
    setTimeout(typeEffect, 300);
  });
}