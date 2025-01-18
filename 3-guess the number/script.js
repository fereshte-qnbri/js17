let randomNumber = Math.floor(Math.random() * 100 + 1);

let tries = 0; 

function guessNumber() {
  const guessInput = document.querySelector('.inputs-Values');
  const guess = parseInt(guessInput.value);
  const output = document.querySelector('.final-out');

  if (isNaN(guess) || guess < 1 || guess > 100) {
    output.textContent = "Please enter a number between 1 and 100.";
  } else {
    tries++;

    if (guess > randomNumber) {
      output.textContent = "Number is too high, try again.";
    } else if (guess < randomNumber) {
      output.textContent = "Number is too low, try again.";
    } else {
      output.textContent = `Guess is correct. You win! The number was ${randomNumber}. You took ${tries} tries.`;
      guessInput.disabled = true; 
    }
  }
}

function newGame() {
  //Your code here
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user
  randomNumber = Math.floor(Math.random() * 100 + 1);
  const guessInput = document.querySelector('.inputs-Values');
  guessInput.value = '';
  guessInput.disabled = false; 
  const output = document.querySelector('.final-out');
  output.textContent = '';
  tries = 0; 
}

document.querySelector('.btnGuess').addEventListener('click', guessNumber);
document.querySelector('.btnNewGame').addEventListener('click', newGame);
