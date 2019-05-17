const Letter = require('./Letter.js')

// Word prototype
function Word(currentWord) {
    this.currentWord = currentWord
    this.word = []

    // fill word array with Letter objects
    for (let i = 0; i < this.currentWord.length; i++) {
        let letter = new Letter(this.currentWord.charAt(i))
        this.word.push(letter)
        if (letter.char === ' ') letter.guessed = true
    }
}

// prototype functions

// render word based on user guesses
Word.prototype.renderWord = function() {
    let renderedWord = ''
    this.word.forEach( elem => {
        renderedWord += elem.renderChar()
    })
    console.log(renderedWord)
}

// run checkChar function on each Letter object
Word.prototype.guessLetter = function(userGuess) {
    let correct = false
    this.word.forEach( elem => {
        if (elem.checkChar(userGuess)) correct = true
    })
    return correct
}

// check if user has guessed every letter
Word.prototype.isSolved = function() {
    let check = true
    this.word.forEach( elem => {
        if (elem.guessed === false) check = false
    })
    return check
}

module.exports = Word
