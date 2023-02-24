"use strict";

const buttons = document.querySelectorAll(".ripple");


buttons.forEach(button => {
    button.addEventListener('click', function(e){
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const innerX = x - buttonLeft
        const innerY = y - buttonTop
        
        const circle = document.createElement("span")
        circle.classList.add("circle")
        circle.style = `top:${innerY}px;left:${innerX}px;`

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)

    })
})