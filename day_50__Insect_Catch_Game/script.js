"use strict";

const screens = document.querySelectorAll(".screen")

const gameContainer = document.querySelector(".game-container")

const time = document.querySelector(".time")
const score = document.querySelector(".score")
const message = document.querySelector(".message")

// btn 
const startBtn = document.querySelector(".btn")
const chooseInsectBtns = document.querySelectorAll(".choose-insect-btn")

let selectedInsects = {}
let scoreCount = 0
let seconds = 0


startBtn.addEventListener("click", (e) => e.target.parentNode.classList.add("up"))

chooseInsectBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        // get the image src and the alt of the img tag
        const img = btn.querySelector("img")
        selectedInsects = {
            src: img.getAttribute("src"),
            alt: img.getAttribute("alt")
        }
        
        screens[1].classList.add("up")

        setTimeout(createInsect, 1000)
        setTimeout(startGame, 1000)
       
    })
})

// setting a timer Function

function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}`: m
    s = s < 10 ? `0${s}`: s
    time.innerText = `Time: ${m}:${s}`
    seconds++
}

// CCreate INsect
function createInsect() {
    const insect = document.createElement("insect")
    insect.classList.add("insect")
    const { x , y} = getRandomLocation()
    insect.innerHTML = `
        <img src="${selectedInsects.src}" alt="${selectedInsects.alt}" style="transform:rotate(${Math.random() * 300}deg);">
    `
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`

    insect.addEventListener("click", insectCaught)
    gameContainer.appendChild(insect)

}

// Place the insects in a random Location
function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100

    return {x, y}
    
}

// / update score add insects 
function insectCaught() {
    updateScore()
    this.classList.add("caught")
    setTimeout(() => this.remove(), 2000)
    addInsects()
}

function addInsects() {
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}

function updateScore() {
    scoreCount++
    
    if (scoreCount >= 20) {
        message.classList.add("visible")
    }
    score.innerText = `Score: ${scoreCount}`
}

