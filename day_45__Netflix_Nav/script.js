"use strict";

const openBtn = document.querySelector(".open-btn")
const closeBtn = document.querySelector(".close-btn")
const navBars = document.querySelectorAll(".nav")

openBtn.addEventListener("click", () => navBars.forEach(nav => 
    nav.classList.add("visible")))

closeBtn.addEventListener("click", () => navBars.forEach(nav => 
    nav.classList.remove("visible")))