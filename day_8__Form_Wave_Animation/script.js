"use strict";

const labels = document.querySelectorAll(".form-control label");

console.log(labels)

// gets each items in labels node list 
// split the individual txt and a makes a node list
// maps the node with idx, and letter 
// adds a span with a trns-delay depanding on the idx of a obj. 
labels.forEach(label => {
  
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => 
    `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join('')
})

