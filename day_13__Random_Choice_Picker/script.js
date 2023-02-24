"use strict";

const textArea = document.getElementById("textarea");
const tagsElem = document.getElementById("tags");

textArea.focus();

textArea.addEventListener('keyup', (event) => {
    createTags(event.target.value);

    if (event.key === 'Enter') {
        setTimeout(() => {
            event.target.value= '';
            randomSelect();
        }, 10)
    }
})

// function to Create tags form text input area
function createTags(value) {
    const tags = value.split(",").filter(tag => tag.trim() !== '')
    .map(tag => tag.trim())

    tagsElem.innerHTML = '';

    tags.forEach(tag => {
        const tagElem = document.createElement('span');
        tagElem.classList.add('tag');
        tagElem.innerHTML = tag;

        tagsElem.appendChild(tagElem);
    })
    
}

function randomSelect() {
    const times = 30;

    // toogle betwenen diff tags
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        if (randomTag !== undefined) {
            highlightTag(randomTag);
            setTimeout(() => {
                unHighlightTag(randomTag)
            }, 100)
        }
    }, 100)

    // picks a tag and hidghlights it 
    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100)

    }, times * 100)

}

function pickRandomTag() {
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)]
}


function highlightTag(tag) {
    tag.classList.add('highlight');
}


function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}
