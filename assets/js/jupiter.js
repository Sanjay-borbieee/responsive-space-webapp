document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  const navLinks = document.querySelectorAll(".nav__link");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        navMenu.classList.remove("show-menu");
      }
    });
  });

  const swiper = new Swiper(".travel__swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const introOverlay = document.getElementById("intro-overlay");
  const mainContent = document.getElementById("main-content");

  setTimeout(() => {
    introOverlay.classList.add("hidden");
    mainContent.classList.remove("hidden");
  }, 1000);

  const scrollUp = document.getElementById("scroll-up");
  if (scrollUp) {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        scrollUp.classList.add("show-scroll");
      } else {
        scrollUp.classList.remove("show-scroll");
      }
    });

    scrollUp.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  const sr = ScrollReveal({
    origin: "bottom",
    distance: "50px",
    duration: 1000,
    delay: 100,
    reset: true,
  });

  sr.reveal(".intro-content", { origin: "top" });
  sr.reveal(".mars__data", { delay: 200 });
  sr.reveal(".mars-details__content", { delay: 300 });
  sr.reveal(".mars-details__image", { delay: 300 });

  sr.reveal(".quiz__question", { delay: 200 });
  sr.reveal(".footer__data", { origin: "top" });
  sr.reveal(".mars__img", { origin: "bottom", duration: 1000, delay: 400 });
  sr.reveal(".mars-details__img", {
    origin: "right",
    duration: 1000,
    delay: 300,
  });
  sr.reveal(".intro-mars-img", { origin: "left", duration: 1000, delay: 200 });
});
