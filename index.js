const inquirer = require('inquirer')
const wordConstructor = require('./Word.js')
const Word = wordConstructor.Word

let wordArray = ['well', 'hello', 'there']
let currentWord = wordArray[Math.floor(Math.random() * wordArray.length)]
let word = new Word(currentWord)


function getUserGuess() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Guess a letter: ',
                name: 'userGuess'
            }
        ])
        .then( response => {
            word.guessLetter(response.userGuess)
            word.renderWord()
            checkCompletion()
        })
}

function checkCompletion() {
    if (word.isSolved()) {
        console.log('You win!')
        process.exit()
    } else {
        getUserGuess()
    }
}

getUserGuess()
    
