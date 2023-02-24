"use strict";

const container = document.getElementById("container")
const colors = ["#9b59b6", "#3498db", "#e67e22", "#16a085", "#f1c40f", "#2980b9", "#8e44ad", "#2c3e50", "#f39c12", "#d35400"]


const SQUARES = 500
let isDragging = false

document.addEventListener("mousedown", ()=> {
    isDragging = true
})

document.addEventListener("mouseup", ()=> {
    isDragging = false
})


for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div")
    square.classList.add("square")

    square.addEventListener("mouseenter", () => addColor(square))
    square.addEventListener("mouseleave", () => removeColor(square))

    // color oonly when mouse is dragged
    // square.addEventListener("mousemove", () => {
    //     if(isDragging){
    //         addColor(square)
    //     }
    // })

    container.appendChild(square)
}

function addColor(element) {
    element.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}

function removeColor(element) {
    element.style.backgroundColor = ""
}