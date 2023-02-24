"use strict";

const insert = document.querySelector(".insert");

window.addEventListener("keydown", (event) => {
    console.log(event);
    insert.innerHTML = `
    <div class="key">
        ${event.key == ' ' ? 'space': event.key}
        <small>event.key</small>
    </div>
    <div class="key">
        ${event.keyCode}
        <small>event.keyCode</small>
    </div>
    <div class="key">
        ${event.code}
        <small>event.Code</small>
    </div>
    `
})