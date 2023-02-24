"use strict";

const imageContainer = document.getElementById("images")
const  rightBtn = document.getElementById("right")
const leftBtn = document.getElementById("left")

const images = document.querySelectorAll("#images img")

let idx = 0

let interval = setInterval(run, 2000)

function run(){
    idx++
    changeImage()
}

function changeImage(){
    if (idx > images.length-1){
        idx = 0
    } else if (idx < 0) {
        idx = images.length - 1
    }

    imageContainer.style.transform = `translateX(${-idx * 500}px)`
}

function resetInteval(){
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener("click", () => {
    idx++
    changeImage()
    resetInteval()
})

leftBtn.addEventListener("click", () => {
    idx--
    changeImage()
    resetInteval()
})