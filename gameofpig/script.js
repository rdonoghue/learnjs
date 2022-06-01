'use strict';
// initial Variables
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceImage = document.querySelector('.dice');
const dispTally = [
  document.getElementById('score--0'),
  document.getElementById('score--1'),
];
const dispScore = [
  document.getElementById('current--0'),
  document.getElementById('current--0'),
];
const dispActive = [
  document.getElementById('name--0'),
  document.getElementById('name--0'),
];
const tally1 = document.getElementById('score--0');
const tally2 = document.getElementById('score--1');
const score1 = document.getElementById('current--0');
const score2 = document.getElementById('current--1');

// Clear the Board
tally1.textContent = 0;
tally2.textContent = 0;
score1.textContent = 0;
score2.textContent = 0;

let playersTurn = 0;
let inActivePlayer = (playersTurn + 1) % 2;
let score = [0, 0];
let currentTally = 0;

console.log('Inactive player: ' + inActivePlayer);
console.log(1 % 2);

// Functions

function switchPlayer() {
  console.log('Was Player: ' + playersTurn + 1);
  playersTurn = (playersTurn + 1) % 2;
  inActivePlayer = (playersTurn + 1) % 2;
  console.log('Now player: ' + playersTurn + 1);

  // BUG:

  dispActive[inActivePlayer].classList.remove('active');
  dispActive[playersTurn].classList.add('active');
  console.log(inActivePlayer + 1);
  console.log(dispActive[inActivePlayer].classList);
  dispActive[1].classList.add('active');
}

function resetGame() {
  tally1.textContent = 0;
  tally2.textContent = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  playersTurn = 1;
  score = [0, 0];
  currentTally = 0;
}
function hold() {
  score[playersTurn] += currentTally;
  updateScore();
  if (score[playersTurn] >= 100) {
    victory();
  } else {
    currentTally = 0;
    switchPlayer();
  }
}

function updateScore() {
  // ok, I could do a loop or a for each here, but there are only 2 values, so this is more compact.
  score1.textContent = score[0];
  score2.textContent = score[1];
  tally1.textContent = 0;
  tally2.textContent = 0;
}

function takeTurn() {
  let latestRoll = rollTheBones();
  const player = playersTurn;
  if (latestRoll === 1) {
    endTurn(player);
  } else {
    updateTally(latestRoll);
  }
}

function updateTally(newvalue) {
  currentTally += newvalue;
  dispTally[playersTurn].textContent = currentTally;
  console.log(
    'Player ' +
      playersTurn +
      ' rolls a ' +
      newvalue +
      ' for a total score of ' +
      currentTally
  );
}
function endTurn(player) {
  console.log('whups');
}

function rollTheBones() {
  let result = Math.trunc(Math.random() * 6 + 1);
  //  document.querySelector('.dice').src = dieSrc;
  console.log('dice-' + result + '.png');
  diceImage.src = 'dice-' + result + '.png';
  return result;
}

//Listeners
// Hit space to roll. just for convenience
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.code === 'Space') {
    console.log(rollTheBones());
    console.log('Active Player: ' + playersTurn);
    console.log('Inactive Player: ' + inActivePlayer);
  }
});

btnRoll.addEventListener('click', takeTurn);
btnHold.addEventListener('click', hold);
