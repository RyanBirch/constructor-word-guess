const inquirer = require('inquirer')
const Word = require('./Word.js')

let wordArray = ['United States', 'Canada', 'Australia', 'New Zealand', 'United Kingdom', 'Spain', 'France', 'Russia', 'Germany', 'Italy', 'China', 'Japan', 'Brazil', 'Argentina']
let currentWord, word, guessesRemaining, lettersGuessed


// get a letter from the user
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

            // add unique guesses to lettersGuessed array
            if (!lettersGuessed.includes(response.userGuess)) lettersGuessed.push(response.userGuess)
            showLettersGuessed()
            checkCompletion()
        })
}

// check if the game is over
function checkCompletion() {
    // if they have guessed every letter, the game is over
    if (word.isSolved()) {
        console.log('You win! \n')
        playAgain()
    } else if (guessesRemaining === 0) {
        // the user runs out of guesses
        console.log('You lose :( \n\nThe word was ' + currentWord + '\n')
        playAgain()
    } else {
        // if the game isn't over, they guess again
        getUserGuess()
    }
}

// ask user if they want to play again
function playAgain() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Play again?',
                choices: ['Yes', 'No'],
                name: 'again'
            }
        ])
        .then( answer => {
            if (answer.again === 'Yes') {
                // reset game
                newGame()
            } else {
                process.exit()
            }
        })
}

// show the user the letters they have already guessed
function showLettersGuessed() {
    let guessed = ''
    console.log('Letters already guessed: \n')

    lettersGuessed.forEach( elem => {
        guessed += elem + ' '
    })
    console.log(guessed + '\n')
}

// start a new game
function newGame() {
    // reset values
    currentWord = wordArray[Math.floor(Math.random() * wordArray.length)]
    word = new Word(currentWord)
    guessesRemaining = 10
    lettersGuessed = []

    // initial game screen
    console.log('\n\n')
    console.log('*******************************')
    console.log('  Hangman: Geography Edition!')
    console.log('*******************************')
    console.log('\n')
    console.log()
    word.renderWord()
    console.log()
    getUserGuess()
}


// begin game
newGame()