"use strict";

const jokeContainer = document.getElementById("joke");
const jokeButton = document.getElementById("jokeBtn");

jokeButton.addEventListener('click', () => generateJoke())
generateJoke();


// using "async await"
async function generateJoke() {
    const config = {
        headers : {
            "Accept": "application/json"
        }
    }
    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    jokeContainer.textContent = data.joke;

}

// without using "async await"
// function generateJoke() {
//     const config = {
//         headers : {
//             "Accept": "application/json"
//         }
//     }
//     fetch('https://icanhazdadjoke.com', config)
//     .then(res => res.json())
//     .then(data => {
//         jokeContainer.textContent = data['joke']
//     })
// }