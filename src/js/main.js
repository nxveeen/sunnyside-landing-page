"use strict";

const hamIcon = document.querySelector(".ham__icon");
const mobileMenu = document.querySelector(".mobile__links");
const overlay = document.querySelector(".overlay");

hamIcon.addEventListener("click", function (e) {
  e.preventDefault();
  mobileMenu.classList.toggle("hidden");
  overlay.classList.toggle("dn");
});

overlay.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
  overlay.classList.toggle("dn");
});
