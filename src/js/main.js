"use strict";

const body = document.querySelector("body");
const hamIcon = document.querySelector(".ham__icon");
const mobileMenu = document.querySelector(".mobile__links");
const closeMobileMenuBtn = document.querySelector(".back");
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
  body.classList.toggle("noScroll");
};

hamIcon.addEventListener("click", function (e) {
  e.preventDefault();
  fadeMobileMenu();
});

closeMobileMenuBtn.addEventListener("click", function () {
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
