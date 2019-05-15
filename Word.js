const letter = require('./Letter.js')
let Letter = letter.Letter

let wordArray = ['well', 'hello', 'there']
let currentWord = wordArray[Math.floor(Math.random() * wordArray.length)]

function Word() {
    this.currentWord = wordArray[Math.floor(Math.random() * wordArray.length)]
    this.word = []
    for (let i = 0; i < this.currentWord.length; i++) {
        let letter = new Letter(this.currentWord.charAt(i), true)
        this.word.push(letter)
    }
    // for testing
    this.printWord = function() {
        console.log(this.word)
    }
    this.render = function() {
        let renderedWord = ''
        this.word.forEach( elem => {
            renderedWord += elem.render()
            // console.log(elem.render())
        })
        console.log(renderedWord)
    }
}

let word = new Word() 
word.render()