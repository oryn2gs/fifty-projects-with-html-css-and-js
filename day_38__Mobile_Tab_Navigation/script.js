"use strict";

const contents = document.querySelectorAll(".content")
const listItems = document.querySelectorAll("li")

listItems.forEach((item, idx) => {
    item.addEventListener("click", () => {
        removeShowClass()
        removeActiveClass()
        item.classList.add("active")
        contents[idx].classList.add("show")
    })
})


function removeShowClass() {
    contents.forEach(content => content.classList.remove("show"))
}

function removeActiveClass() {
    listItems.forEach(item => item.classList.remove("active"))
}