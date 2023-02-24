"use strict";


const ratings = document.querySelectorAll(".rating")
const panelContainer = document.querySelector("#panel")
const ratingContainer = document.querySelector(".ratings-container")
const sendBtn = document.querySelector("#send")

let review = "Satisfied"

sendBtn.addEventListener("click", () => {
    panelContainer.innerHTML = `
        <i class="fas fa-heart"></i>
        <br>
        <small>Review: ${review}</small>
        <p>Thank you for your review <br>
        we'll use your feedback to improve our customer support</p>
    `
})

//evnet bubbling
ratingContainer.addEventListener("click", (e) => {
     if(e.target.parentNode.classList.contains("rating")){
        removeActive()
        e.target.parentNode.classList.add("active")
        review = e.target.nextElementSibling.textContent
        console.log(review)

     }
})


function removeActive() {
    ratings.forEach(rate => {
        rate.classList.remove("active")
    })
}