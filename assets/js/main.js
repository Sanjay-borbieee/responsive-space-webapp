const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

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

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

const blurHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

const swiperTravel = new Swiper(".travel__swiper", {
  spaceBetween: 32,
  loop: true,
  grabCursor: true,
  centeredSlides: "auto",
  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 2,
    },

    1200: {
      slidesPerView: 3,
    },
  },
});

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1500,
  delay: 400,
});

sr.reveal(".home__data, .explore__data, .history__card", { origin: "left" });
sr.reveal(".home__img, .explore__img", { origin: "right" });
sr.reveal(".travel__card", { interval: 100 });

window.addEventListener("scroll", function () {
  const parallax = document.querySelector(".home__bg");
  let scrollPosition = window.pageYOffset;
  parallax.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
});

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;

  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = (progress * (end - start) + start).toLocaleString();
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      obj.innerHTML = end.toLocaleString();
    }
  };

  window.requestAnimationFrame(step);
}

const observerOptions = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const countElement = entry.target.querySelector(".explore__info-number");
      const endValue = parseInt(countElement.getAttribute("data-count"));
      animateValue(countElement, 0, endValue, 2000);
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".explore__info").forEach((infoElement) => {
  observer.observe(infoElement);
});

document.addEventListener("DOMContentLoaded", function () {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 400,
  });

  sr.reveal(".planet__card", {
    interval: 100,
  });
});
