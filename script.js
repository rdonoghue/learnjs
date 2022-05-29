'use strict';

let guessHistory = [];
const correctNumber = 15;

function isNumber(numbertocheck) {
  return typeof numbertocheck == 'number';
}

function invalidGuess() {
  console.log('Invalid Guess');
}

function processGuess(guessvalue) {
  // Console Output
  console.log('The Guess is: ' + guessvalue);
  console.log('It is of type: ' + typeof guessvalue);
  // Convert to a number an check for validity
  guessvalue = Number(guessvalue);
  console.log('Now It is of type: ' + typeof guessvalue);
  if (guessvalue === 0 || guessvalue > 20) {
    invalidGuess();
    return;
  }
  // Compare to Correct Value
  console.log(guessvalue);

  if (guessvalue == 0) {
    document.querySelector('.message').textContent = 'Start Guessing!';
  } else if (guessvalue < correctNumber) {
    document.querySelector('.message').textContent = 'Too Low!';
  } else if (guessvalue > correctNumber) {
    document.querySelector('.message').textContent = 'Too High!';
  } else {
    document.querySelector('.message').textContent = 'Correct!';
  }
  // Update Guess History
  console.log(guessvalue);
  guessHistory.push(guessvalue);
  console.log('List of Guesses: ' + guessHistory);
  document.querySelector('.guesshistory').textContent =
    'Guesses: ' + guessHistory;
}

// console.log(document.querySelector('.message'));
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number! 🎉';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);

// if (isNumber(document.querySelector('.guess').value)) {
//   console.log("It's a Number!" + document.querySelector('.guess').value);
// } else {
//   console.log('Not a number!  ' + document.querySelector('.guess').value);
//   console.log("It's a " + typeof document.querySelector('.guess').value);
// }

document.querySelector('.check').addEventListener('click', function () {
  processGuess(document.querySelector('.guess').value);
  document.querySelector('.guess').value = '';
});

document.querySelector('.guess').addEventListener('keypress', function (event) {
  if (event.code === 'Enter') {
    processGuess(document.querySelector('.guess').value);
    document.querySelector('.guess').value = '';
  }
});
