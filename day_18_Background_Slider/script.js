"use strict";

const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

let activeSlides = 0;

setBackground();

rightButton.addEventListener('click', () => {
    activeSlides++
    
    if (activeSlides > slides.length -1) {
        activeSlides = 0; 
    }
    setBackground();
    setActiveSlide();
})

leftButton.addEventListener('click', () => {
    activeSlides--
    
    if (activeSlides < 0) {
        activeSlides = slides.length - 1; 
    }
    setBackground();
    setActiveSlide();
})

function setBackground() {
    body.style.backgroundImage = slides[activeSlides].style.backgroundImage;
    setActiveSlide();
  
}

function setActiveSlide() {
    slides.forEach(slide => 
        slide.classList.remove("active")
    )
    slides[activeSlides].classList.add('active')
}