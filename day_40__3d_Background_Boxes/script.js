"use strict";

const magicBtn = document.getElementById("btn")
const boxesContainer = document.getElementById("boxes")

magicBtn.addEventListener("click", () => {
    boxesContainer.classList.toggle("big")
})

function createBox() {
    for (let c = 0; c < 4; c++) {
        for (let r = 0; r < 4; r++) {
            const box = document.createElement("div")
            box.classList.add("box")
            box.style.backgroundPosition = `${-r * 125}px ${-c * 125}px`
            boxesContainer.appendChild(box)
        }
    }
}

createBox();