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

let cardChosen = []
let cardChoosenId = []
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

    if (card )

    if (cardChosen[0] == cardChosen[1]) {
        alert('Matched')
        card[cardChoosenId[0]].setAttribute('src', 'images/white.png')
        card[cardChoosenId[0]].removeEventListener('click', flipCard)
        card[cardChoosenId[1]].setAttribute('src', 'images/white.png')
        card[cardChoosenId[1]].removeEventListener('click', flipCard)

        cardWon.push(cardChosen)
    }

    cardChosen = []
    cardChoosenId = []
}

// create flip effect
function flipCard() {
    console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    console.log(cardArray[cardId].name)
    cardChosen.push(cardArray[cardId].name)
    cardChoosenId.push(cardId)
    console.log('clicked', cardId)
    this.setAttribute('src', cardArray[cardId].img)

    if (cardChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}
