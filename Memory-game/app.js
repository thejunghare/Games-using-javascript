const cardArray = [
    {
        name: 'fires',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'fires',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())
const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')

let cardsChosen = []
let cardsChosenId = []
const cardWon = []

// creating game board
function createBoard() {
    for (let index = 0; index < cardArray.length; index++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', index)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()
function checkMatch() {
    console.log('check for match')

    const card = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if (optionOneId == optionTwoId) {
        alert('You have clicked the same images')
        card[optionOneId].setAttribute('src', 'images/blank.png')
        card[optionOneId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
    }

    if (cardsChosen[0] === cardsChosen[1]) {
        alert('Matched')
        //        set the images to white if Matched
        card[optionOneId].setAttribute('src', 'images/white.png')
        card[optionTwoId].setAttribute('src', 'images/white.png')

        //        removeEventListener
        card[optionOneId].removeEventListener('click', flipCard)
        card[optionTwoId].removeEventListener('click', flipCard)

        cardWon.push(cardsChosen)
    } else {
        card[optionOneId].setAttribute('src', 'images/blank.png')
        card[optionTwoId].setAttribute('src', 'images/blank.png')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardWon.length

    if (cardWon.length === cardArray.length / 2) {
        resultDisplay.textContent = 'Congratulations you found them all'
    }
}

// create flip effect
function flipCard() {
    console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    console.log(cardArray[cardId].name)
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    console.log('clicked', cardId)
    this.setAttribute('src', cardArray[cardId].img)

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}
