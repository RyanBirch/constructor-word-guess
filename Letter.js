// Letter constructor
function Letter(char) {
    this.char = char
    this.guessed = false
}

// prototype functions

// if user guesses correctly we render the letter, otherwise render an underscore
Letter.prototype.renderChar = function() {
    if (this.guessed) return this.char 
    else return ' _' 
}

// check user guess
Letter.prototype.checkChar = function(userGuess) {
    if (userGuess.toLowerCase() === this.char.toLowerCase()) {
        this.guessed = true 
        return true
    }
}

module.exports = Letter