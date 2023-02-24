"use strict";

const form = document.getElementById("form")
const input = document.getElementById("input")
const todosEl = document.getElementById("todos")

const getTodos = JSON.parse(localStorage.getItem("todos"))

if(getTodos) {
    getTodos.forEach(todo => {
        createTodos(todo)
    })
}


form.addEventListener("submit", (e) => {
    e.preventDefault()
    createTodos()
    updateLs()
})


function createTodos(todo) {
    let todoTxt = input.value

    if (todo) {
        todoTxt = todo.text
    }

    if (todoTxt) {
        const li = document.createElement("li")
        if (todo && todo.completed) {
            li.classList.add("completed")
        }

        li.innerText = todoTxt
        
        li.addEventListener("click", (e) => {
            li.classList.toggle("completed")
            updateLs()
        })
        li.addEventListener("contextmenu", (e) => {
            e.preventDefault()
            li.remove()
            updateLs()
        })
        todosEl.appendChild(li)
    }
    input.value = ""
}

function updateLs() {
    const todoEl = document.querySelectorAll("li")

    const todos = []

    todoEl.forEach(todo => {
        todos.push({
            text: todo.innerText,
            completed: todo.classList.contains("completed")
        })
    })
    localStorage.setItem("todos", JSON.stringify(todos))

}


// todosEl.addEventListener("mousedown", (e) => {
//     if (e.button === 0 ) {
//         e.target.classList.toggle("completed")
//     } else if (e.button === 2){
//         e.preventDefault()
//         e.target.remove()
//     }
// })
