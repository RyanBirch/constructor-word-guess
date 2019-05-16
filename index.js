const inquirer = require('inquirer')
const Word = require('./Word.js')

let wordArray = ['well', 'hello', 'there']
let currentWord = wordArray[Math.floor(Math.random() * wordArray.length)]
let word = new Word(currentWord)
let guessesRemaining = 10
let lettersGuessed = []


function getUserGuess() {

    // get user input
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Guess a letter: ',
                name: 'userGuess'
            }
        ])
        .then( response => {
            // check if letter the user guessed is correct
            if (!word.guessLetter(response.userGuess)) {
                guessesRemaining --
            }
            console.log('\n\n')
            word.renderWord()
            console.log('\nGuesses remaining: ' + guessesRemaining + '\n')
            lettersGuessed.push(response.userGuess)
            showLettersGuessed()
            checkCompletion()
        })
}

function checkCompletion() {
    // if they have guessed every letter, the game is over
    if (word.isSolved()) {
        console.log('You win!')
        process.exit()
    } else if (guessesRemaining === 0) {
        // the user runs out of guesses
        console.log('You lose :(')
        process.exit()
    } else {
        // if the game isn't over, they guess again
        getUserGuess()
    }
}

function showLettersGuessed() {
    let guessed = ''
    console.log('Letters already guessed: \n')

    lettersGuessed.forEach( elem => {
        guessed += elem + ' '
    })
    console.log(guessed + '\n')
}

// display word masked with underscores at the start of the game
console.log()
word.renderWord()
console.log()
getUserGuess()
    
