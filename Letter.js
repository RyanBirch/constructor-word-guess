function Letter(char, guessed) {
    this.char = char
    this.guessed = guessed
    // if user guesses correctly we render the letter, otherwise render an underscore
    this.render = function() {
        if (guessed) return this.char 
        else return ' _'
    }
    // check user guess
    this.checkChar = function(userGuess) {
        if (userGuess === this.char) this.guessed = true 
    }
}

exports.Letter = Letter