"use strict";

const range  = document.getElementById("range")

range.addEventListener("input", (e) => {
    const value = e.target.value
    const label = e.target.nextElementSibling

    // get the conputed width of label and input fiels
    const rangeInputWidth = Number.parseFloat(getComputedStyle(range).getPropertyValue("width"))
    const rangeLabelWidth = Number.parseFloat(getComputedStyle(label).getPropertyValue("width"))

    // max an min val of the input field
    const max = +e.target.max
    const min = +e.target.min

    const left = value * (rangeInputWidth / max) - rangeLabelWidth / 2 + scale(value, min, max, 10, -10)

    label.style.left = `${left}px`
    
    label.textContent = value
})

// Mapping range of numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
