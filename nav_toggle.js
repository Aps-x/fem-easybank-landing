const navToggle = document.querySelector(".nav_toggle");
const topNav = document.querySelector(".top_nav");
const overlay = document.querySelector(".hero_section__overlay");

const iconHamburger = document.querySelector(".nav_toggle__hamburger");
const iconClose = document.querySelector(".nav_toggle__close");

navToggle.addEventListener("click", () => {
    if (topNav.hasAttribute("data-visible")) {
        navToggle.setAttribute("aria-expanded", false);
        overlay.style.display = "none";
        iconHamburger.style.display = "block";
        iconClose.style.display = "none";
    }
    else {
        navToggle.setAttribute("aria-expanded", true);
        overlay.style.display = "block";
        iconHamburger.style.display = "none";
        iconClose.style.display = "block";
    }
  topNav.toggleAttribute("data-visible");
});