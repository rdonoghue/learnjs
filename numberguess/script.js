'use strict';

// let guessHistory = [];
// const correctNumber = Math.trunc(Math.random() * 20);
// console.log(correctNumber);

function isNumber(numbertocheck) {
  return typeof numbertocheck == 'number';
}

function invalidGuess() {
  console.log('Invalid Guess');
}

function processGuess(guessvalue) {
  // Console Output
  // console.log('The Guess is: ' + guessvalue);
  // console.log('It is of type: ' + typeof guessvalue);
  // Convert to a number an check for validity
  guessvalue = Number(guessvalue);
  // console.log('Now It is of type: ' + typeof guessvalue);
  if (guessvalue === 0 || guessvalue > 20) {
    invalidGuess();
    return;
  }
  // increment Score
  currentScore += -1;
  document.querySelector('.score').textContent = currentScore;

  // Compare to Correct Value
  // console.log(guessvalue);

  if (!guessvalue) {
    document.querySelector('.message').textContent = 'Start Guessing!';
  } else if (guessvalue < correctNumber) {
    document.querySelector('.message').textContent = 'Too Low!🔽';
  } else if (guessvalue > correctNumber) {
    document.querySelector('.message').textContent = 'Too High!🔼';
  } else {
    document.querySelector('.message').textContent = 'Correct!';
    document.querySelector('.guess').style.display = 'none';
    document.querySelector('.check').style.display = 'none';
    document.querySelector('.recheck').style.display = 'block';
    document.querySelector('.success').style.display = 'block';
    document.querySelector('.number').textContent = '!';
    document.querySelector('.number').style.backgroundColor = 'green';
    document.querySelector('.number').style.color = 'white';

    // update High Score
    if (currentScore > highScore) {
      highScore = currentScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // Update Guess History
  console.log(guessvalue);
  guessHistory.push(guessvalue);
  console.log('List of Guesses: ' + guessHistory);
  document.querySelector('.guesshistory').textContent =
    'Guesses: ' + guessHistory;

  // Update Score
}

function pageReset() {
  guessHistory = [];
  correctNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Make a Guess!';
  document.querySelector('.guess').style.display = 'block';
  document.querySelector('.check').style.display = 'block';
  document.querySelector('.recheck').style.display = 'none';
  document.querySelector('.success').style.display = 'none';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.background = '#eee';
  document.querySelector('.number').style.color = '';
  console.log('New Number is: ' + correctNumber);
  currentScore = 20;
  document.querySelector('.score').textContent = currentScore;
  document.querySelector('.guesshistory').textContent = '';
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

let guessHistory = [];
let correctNumber = Math.trunc(Math.random() * 20) + 1;
console.log('New Number is: ' + correctNumber);
let currentScore = 20;
let highScore = 0;

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

document.querySelector('.recheck').addEventListener('click', function () {
  pageReset();
});
