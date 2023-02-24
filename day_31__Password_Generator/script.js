"use strict";

const resultEl = document.getElementById("result")
const clipboardEl = document.getElementById("clipboard")
const lengthEl = document.getElementById("length")
const uppercaseEl = document.getElementById("uppercase")
const lowercaseEl = document.getElementById("lowercase")
const numbersEl = document.getElementById("numbers")
const symbolsEl = document.getElementById("symbols")
const generateEl = document.getElementById("generate")


const randomFunc = {
    lowercase: getRandomLowercase,
    uppercase: getRandomUppercse,
    number: getRandomNumber,
    symbol: getRandomSymbol
}


generateEl.addEventListener("click", () => {
    const length = lengthEl.value
    const lowercase  = lowercaseEl.checked
    const uppercase  = uppercaseEl.checked
    const symbol  = symbolsEl.checked
    const number  = numbersEl.checked

    resultEl.innerText = generatePassword(lowercase, uppercase, number, symbol, length)
})


// generates password based onsettings
function generatePassword(lowercase, uppercase, number, symbol, length) {
    let generatedPassword = ''
    
    const typesCount = lowercase + uppercase + number + symbol
    const typesArr = [{lowercase}, {uppercase}, {number}, {symbol}].
    filter(item => Object.values(item)[0])

    if (typesCount === 0) {
        return ''
    }

    for(let i = 0; i < length; i += typesCount){
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }
    const finalPassword = generatedPassword.slice(0, length)
    return finalPassword
}

// copying text to clipboard
clipboardEl.addEventListener("click", () => {
    const password = resultEl.innerText;
    if (!password) {
        return;
    }
    navigator.clipboard.writeText(password);
        alert('Password copied to clipboard!')
})


// Function to create Char
function getRandomLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUppercse() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    return String.fromCharCode(Math.floor(Math.random() * 14) + 33)
}


