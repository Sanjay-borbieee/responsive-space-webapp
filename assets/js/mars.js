document.addEventListener("DOMContentLoaded", (event) => {
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

  const quizForm = document.querySelector(".quiz__container");
  const quizResult = document.getElementById("quiz-result");

  if (quizForm) {
    quizForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let score = 0;
      const answers = [
        "Olympus Mons",
        "2",
        "-80°F",
        "The Red Planet",
        "24 hours and 37 minutes",
      ];

      answers.forEach((answer, index) => {
        const selectedAnswer = quizForm.querySelector(
          `input[name="q${index + 1}"]:checked`
        );
        if (selectedAnswer && selectedAnswer.value === answer) {
          score++;
        }
      });

      quizResult.textContent = `You scored ${score} out of ${answers.length}!`;
    });
  }

  const introOverlay = document.getElementById("intro-overlay");
  const mainContent = document.getElementById("main-content");
  const marsImg = document.querySelector(".mars__img");

  setTimeout(() => {
    introOverlay.classList.add("hidden");
    mainContent.classList.remove("hidden");
    marsImg.classList.remove("intro-animate");
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
});

function checkAnswers() {
  const quizForm = document.getElementById("quiz-form");
  const resultDiv = document.getElementById("quiz-result");

  const correctAnswers = {
    q1: "Olympus Mons",
    q2: "2",
    q3: "-80°F",
    q4: "The Red Planet",
    q5: "24 hours and 37 minutes",
  };

  let score = 0;
  let totalQuestions = Object.keys(correctAnswers).length;

  Object.keys(correctAnswers).forEach((question) => {
    const userAnswer = quizForm[question]?.value;
    if (userAnswer === correctAnswers[question]) {
      score++;
    }
  });

  resultDiv.innerHTML = `You scored <span id="score">${score}</span> out of ${totalQuestions}.`;
  const scoreSpan = document.getElementById("score");

  if (score > 2) {
    scoreSpan.style.color = "green";
  } else {
    scoreSpan.style.color = "red";
  }

  if (score === totalQuestions) {
    resultDiv.innerHTML += "<br>Perfect score! You're a quiz master!";
  } else if (score === 0) {
    resultDiv.innerHTML += "<br>Don't worry, try again!";
  } else {
    resultDiv.innerHTML += "<br>Good effort! Keep learning.";
  }
}

document.addEventListener("DOMContentLoaded", function () {
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
