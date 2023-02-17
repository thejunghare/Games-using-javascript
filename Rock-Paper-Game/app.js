const computerChoice = document.querySelector('#computer-choice') // Getting computer choice elmenet
const displayUserChoice = document.querySelector('#your-choice')
// Get the rock, Paper, Scissors, btn and result element
// const paper = document.querySelector('#paper')
const paper = document.querySelector('#🖐️')
// const rock = document.querySelector('#rock')
const rock = document.querySelector('#✊')
// const scissors = document.querySelector('#scissors')
const scissors = document.querySelector('#✌️')
const result = document.querySelector('#result')
const userChoiceBtn = document.querySelectorAll('.btn') // catch all three buttons

// Genrating computer's choice
let storedComputerChoice
let CompChoice = () => {
    let randomNumber = Math.floor((Math.random() * 3) + 1)
    if (randomNumber === 1) {
        storedComputerChoice = '🖐️'
    }

    if (randomNumber === 2) {
        storedComputerChoice = '✊'
    }

    if (randomNumber === 3) {
        storedComputerChoice = '✌️'
    }

    computerChoice.innerHTML = storedComputerChoice
    computerChoice.style.fontSize = '150px'
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
    if (storedComputerChoice === '✊' && storedUserChoice === '🖐️') {
        storedResult = 'You Win'
    }
    if (storedComputerChoice === '✊' && storedUserChoice === '✌️') {
        storedResult = 'You Loses'
    }

    // computer choose paper
    if (storedComputerChoice === '🖐️' && storedUserChoice === '✌️') {
        storedResult = 'You Win'
    }
    if (storedComputerChoice === '🖐️' && storedUserChoice === '✊') {
        storedResult = 'You Loses'
    }

    // computer choose scissors
    if (storedComputerChoice === '✌️' && storedUserChoice === '🖐️') {
        storedResult = 'You loses'
    }
    if (storedComputerChoice === '✌️' && storedUserChoice === '✊') {
        storedResult = 'You Win'
    }

    result.innerHTML = storedResult
}