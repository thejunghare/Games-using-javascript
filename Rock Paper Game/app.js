const computerChoice = document.querySelector('#computer-choice') // Getting computer choice elmenet
const displayUserChoice = document.querySelector('#your-choice')
// Get the rock, Paper, Scissors, btn and result element
const paper = document.querySelector('#paper')
const rock = document.querySelector('#rock')
const scissors = document.querySelector('#scissors')
const result = document.querySelector('#result')
const userChoiceBtn = document.querySelectorAll('.btn') // catch all three buttons

// Genrating computer's choice
let storedComputerChoice
let CompChoice = () => {
    let randomNumber = Math.floor((Math.random() * 3) + 1)
    if (randomNumber === 1) {
        storedComputerChoice = 'paper'
    }

    if (randomNumber === 2) {
        storedComputerChoice = 'rock'
    }

    if (randomNumber === 3) {
        storedComputerChoice = 'scissors'
    }

    computerChoice.innerHTML = storedComputerChoice
}

// genrating user's choice
let storedUserChoice
userChoiceBtn.forEach(userChoiceBtn => userChoiceBtn.addEventListener('click', (e) => {
    storedUserChoice = e.target.id;
    displayUserChoice.innerHTML = storedUserChoice
    CompChoice()
    DisplayResult()
}))


// Display of result
let storedResult
let DisplayResult = () => {
    // Both stored choice are same
    if (storedComputerChoice === storedUserChoice) {
        storedResult = 'Game Tied'
    }

    // computer choose rock
    if (storedComputerChoice === 'rock' && storedUserChoice === 'paper') {
        storedResult = 'You Win'
    }
    if (storedComputerChoice === 'rock' && storedUserChoice === 'scissors') {
        storedResult = 'You Loses'
    }

    // computer choose paper
    if (storedComputerChoice === 'paper' && storedUserChoice === 'scissors') {
        storedResult = 'You Win'
    }
    if (storedComputerChoice === 'paper' && storedUserChoice === 'rock') {
        storedResult = 'You Loses'
    }

    // computer choose scissors
    if (storedComputerChoice === 'scissors' && storedUserChoice === 'paper') {
        storedResult = 'You loses'
    }
    if (storedComputerChoice === 'scissors' && storedUserChoice === 'rock') {
        storedResult = 'You Win'
    }

    result.innerHTML = storedResult
}