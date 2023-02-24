"use strict";

const toggleBtn = document.querySelector(".toggle");
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");


const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


toggleBtn.addEventListener('click', () => {
    const html = document.querySelector("html")
    if (html.classList.contains("dark")) {
        html.classList.remove("dark")
        toggleBtn.textContent = "Dark Mode";
    } else {
        html.classList.add("dark")
        toggleBtn.textContent = "Light Mode";
    }
})

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate()
    const day = time.getDay();
    const hours = time.getHours();
    const hoursForClock = hours % 2;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    timeEl.textContent = `${hours}:${minutes < 10 ? `0${minutes}`: minutes}`
    dateEl.innerHTML = `${weeks[day]}, ${months[month]} <span class="circle">${date}</span>`
}

// Mapping range of numbe to each other
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setTime()
setInterval(setTime, 1000);
