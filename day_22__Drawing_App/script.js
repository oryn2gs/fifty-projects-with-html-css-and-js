"use strict";

const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearBtn = document.getElementById("clear");


const canvas =document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let color = "black";
let size = 10;
let x 
let y 
let isPressed = false;

updateSizeOnScreen();

canvas.addEventListener('mousedown', (e) => {
    isPressed = true
    x = e.offsetX
    y = e.offsetY

})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed){
        let x2 = e.offsetX
        let y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        x = x2
        y = y2
    }
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false
    
    x = undefined
    y = undefined

})


function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}


function updateSizeOnScreen(){
    sizeEl.textContent = size;
}

decreaseBtn.addEventListener('click', () => {
    size -= 5;
    if (size < 5) {
        size = 5;
    }
    updateSizeOnScreen();
})

increaseBtn.addEventListener('click', () => {
    size += 5;
    if (size > 50) {
        size = 50;
    }
    updateSizeOnScreen();
})

colorEl.addEventListener('change', (e) => color = e.target.value )

clearBtn.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))

