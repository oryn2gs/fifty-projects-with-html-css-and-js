"use strict";

const loveMeEl = document.querySelector(".loveMe")
const times = document.querySelector("#times")

let clickedTime = 0 

let likedCount = 0

// You can you "dlbclick" instead of click for simplicity
loveMeEl.addEventListener("click", function(e) {
    if (clickedTime === 0 ) {
        clickedTime = new Date().getTime()
    } else {
        if (new Date().getTime() - clickedTime  < 800) {
            displayHeart(e);
            clickedTime = 0
        } else {
            clickedTime = new Date().getTime()
        }
    }
})

function displayHeart(e) {
    const heart = document.createElement("i")
    heart.classList.add("fas")
    heart.classList.add("fa-heart")

    const x = e.clientX
    const y = e.clientY

    // offset x and y of a container realtive to viewport
    const offsetX = e.target.offsetLeft
    const offsetY = e.target.offsetTop

    const xInside = x - offsetX
    const yInside = y - offsetY

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMeEl.appendChild(heart)

    setTimeout(() => heart.remove(), 1000)

    times.innerText = ++likedCount
}