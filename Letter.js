function Letter(char) {
    this.char = char
    this.guessed = false
    // if user guesses correctly we render the letter, otherwise render an underscore
    this.renderChar = function() {
        if (this.guessed) return this.char 
        else return ' _' 
    }
    // check user guess
    this.checkChar = function(userGuess) {
        if (userGuess === this.char) {
            this.guessed = true 
            return true
        }
    }
}

module.exports = Letter