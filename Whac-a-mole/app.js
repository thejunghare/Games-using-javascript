const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')

const displayTimeReaming = document.querySelector('#time-reaming')
const score = document.querySelector('#score')

const startButton = document.querySelector('#start-btn')

let hitPosition
let yourscore = 0
let timeInterval = null


function randomSquare() {
    // remove mole class from square
    squares.forEach(element => {
        element.classList.remove('mole')
    })

    // get the random square
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    // console.log(randomSquare)

    // added class mole to randomly picked square
    randomSquare.classList.add('mole')

    // catch the id of random square
    hitPosition = randomSquare.id
}


// start the counter and move the mole on click start
startButton.addEventListener('click', function startCounter(params) {
    startCountDown(5)
    moveMole()


})

// 
squares.forEach(element => {
    element.addEventListener('mousedown', () => {
    if (element.id == hitPosition){
        console.log('Yoo')
        yourscore++ 
        score.textContent = yourscore
        hitPosition = null
    }
    })
})

function moveMole() {  
    timeInterval = setInterval(randomSquare, 600)
}

// 60 seconds counter
function startCountDown(seconds) {
    let counter = seconds

    const interval = setInterval(() => {
        console.log(counter)
        counter--
        if (counter <= 0) {
            clearInterval(interval)
            alert('Ding! Time Out, Your score is ' + yourscore)
            // stop moving the mole
            clearInterval(timeInterval )

            squares.forEach(element=>{
                element.classList.remove = 'mole'
            })

        }
        displayTimeReaming.textContent = counter
    }, 1000)

    if (counter < 0){
       
    }

}

function displayScore(){
    console.log('Displaying score')
}


stopMole()
