"use strict";

const passwordEl = document.getElementById("password")
const backgroundImg = document.getElementById("background")

passwordEl.addEventListener("input", (e) => {
    const input = e.target.value
    if (input !== "") {
        const length = input.length > 10 ? 10 : input.length;
        backgroundImg.style.filter = `blur(${20 - (length * 2)}px)`
    }
})