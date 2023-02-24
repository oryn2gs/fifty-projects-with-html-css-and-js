"use strict";

const APIURL = 'https://api.github.com/users/'

const mainEl = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search")


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value
    if (user) {
        getUser(user)
        search.value = ''
    }
})

// get the user info and update user card
async function getUser(username) {
    try {
        const { data } = await axios.get(APIURL + username)
        createUserCard(data)
        getUserRepos(username)
    } catch(err) {
        if (err.response.status === 404) {
            createErrorCard("User not found")
        }
    }

}

// get user repos and updated repos card
async function getUserRepos(username) {
    try {
        const { data } = await axios.get(APIURL + username + '/repos?sort=created')
        addUserRepos(data)
    } catch(err) {
        createErrorCard("Unable to Fetch Repos")
    }
}

// error msg
function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `
    main.innerHTML = cardHTML
}

// user card with user data
function createUserCard(user) {
    const card = `
    <div class="card">
        <div>
            <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>

            <ul>
                <li>${user.followers}<strong>Followers</strong> </li>
                <li>${user.following}<strong>Following</strong> </li>
                <li>${user.public_repos}<strong>Repositories</strong> </li>
            </ul>

            <div id="repos"></div>
        </div>
    </div>
    `
    mainEl.innerHTML = card
}

// repos card with the provided data
function addUserRepos(repos) {
    const reposEl = document.getElementById("repos")

    repos
        .slice(0, 5)
        .forEach(repo => {
            const repoEl = document.createElement("a")
        
            repoEl.classList.add("repo")
            repoEl.href = repo.html_url
            repoEl.target = '_blank'
            repoEl.innerText = repo.name
        
            reposEl.appendChild(repoEl)
        })

}