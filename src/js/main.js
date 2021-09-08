"use strict";

const hamIcon = document.querySelector(".ham__icon");
const mobileMenu = document.querySelector(".mobile__links");
const overlay = document.querySelector(".overlay");
const anchors = document.querySelectorAll("a");
const desktopLinks = document.querySelector(".desktop__links");

//------------anchor <a> tag prevent default ------------
anchors.forEach((a) => {
  a.addEventListener("click", function (e) {
    e.preventDefault();
  });
});

const fadeMobileMenu = function () {
  mobileMenu.classList.toggle("hidden");
  overlay.classList.toggle("dn");
};

hamIcon.addEventListener("click", function (e) {
  e.preventDefault();
  fadeMobileMenu();
});

overlay.addEventListener("click", function () {
  fadeMobileMenu();
});

// -------------smooth scroll-------------------
desktopLinks.addEventListener("click", function (e) {
  smoothScroll(e);
});

const smoothScroll = function (event) {
  const link = event.target.closest(".desktop__link");
  if (!link) return;
  let targetSection = document.querySelector(`#${link.dataset.goto}`);
  if (!targetSection) return;
  targetSection.scrollIntoView({
    behavior: "smooth",
  });
};
