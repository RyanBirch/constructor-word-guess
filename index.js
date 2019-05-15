const inquirer = require('inquirer')
const Word = require('./Word.js')

let wordArray = ['well', 'hello', 'there']
let currentWord = wordArray[Math.floor(Math.random() * wordArray.length)]
let word = new Word(currentWord)
let guessesRemaining = 10


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
            word.guessLetter(response.userGuess)
            word.renderWord()
            checkCompletion()
        })
}

function checkCompletion() {
    // if they have guessed every letter, the game is over
    if (word.isSolved()) {
        console.log('You win!')
        process.exit()
    } else {
        // if the game isn't over, they guess again
        getUserGuess()
    }
}

// display word masked with underscores at the start of the game
word.renderWord()
getUserGuess()
    
