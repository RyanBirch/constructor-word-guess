const letter = require('./Letter.js')
let Letter = letter.Letter

function Word(currentWord) {
    this.currentWord = currentWord
    this.word = []
    // fill word array with Letter objects
    for (let i = 0; i < this.currentWord.length; i++) {
        let letter = new Letter(this.currentWord.charAt(i))
        this.word.push(letter)
    }
    // render word based on user guesses
    this.renderWord = function() {
        let renderedWord = ''
        this.word.forEach( elem => {
            renderedWord += elem.renderChar()
        })
        console.log(renderedWord)
    }
    // run checkChar function on each Letter object
    this.guessLetter = function(userGuess) {
        this.word.forEach( elem => {
            elem.checkChar(userGuess)
        })
    }
}

let word = new Word('hello') 
word.renderWord()
word.guessLetter('l')
word.guessLetter('e')
word.renderWord()