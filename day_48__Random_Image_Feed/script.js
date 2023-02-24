"use strict";

const URL = "https://source.unsplash.com/random/"
const mainContainer = document.querySelector(".container")

const rows = 5 

const genImageSize = () => `${genRandomNum()}x${genRandomNum()}` 

for(let i = 0; i < 3 * rows; i++) {
    const img = document.createElement("img")
    img.src = `${URL}${genImageSize}`
    
    mainContainer.appendChild(img)
}

function genRandomNum() {
    return Math.floor(Math.random() * 10 ) + 300
}