"use strict";

const boxes = document.querySelectorAll(".box");

window.addEventListener('scroll', checkBoxes);
checkBoxes();

console.log(window.innerHeight)

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach(box => {
        // the func getBoundClientRect return size of the box
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    })

}

