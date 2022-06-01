'use strict';
// initial Variables
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
const diceImage = document.querySelector('.dice');
const dispBusted = [
  document.getElementById('busted--0'),
  document.getElementById('busted--1'),
];
const dispTally = [
  document.getElementById('score--0'),
  document.getElementById('score--1'),
];
const dispScore = [
  document.getElementById('current--0'),
  document.getElementById('current--1'),
];
const dispActive = [
  document.getElementById('name--0'),
  document.getElementById('name--1'),
];

const activePlayer = [
  document.querySelector('.player--0'),
  document.querySelector('.player--1'),
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
let inActivePlayer = 1;
let score = [0, 0];
let currentTally = 0;
let gameOver = false;

for (let foo = 0; foo < 20; foo++) {
  console.log('num ' + foo);
}

// Functions

function switchPlayer() {
  currentTally = 0;
  updateScore();
  playersTurn = (playersTurn + 1) % 2;
  inActivePlayer = (playersTurn + 1) % 2;
  activePlayer[inActivePlayer].classList.remove('player--active');
  activePlayer[playersTurn].classList.add('player--active');
  dispActive[inActivePlayer].classList.remove('active');
  dispActive[playersTurn].classList.add('active');
}

function resetGame() {
  tally1.textContent = 0;
  tally2.textContent = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  playersTurn = 0;
  inActivePlayer = 1;
  score = [0, 0];
  currentTally = 0;
  dispActive[inActivePlayer].classList.remove('active');
  dispActive[playersTurn].classList.add('active');
  activePlayer[inActivePlayer].classList.remove('player--active');
  activePlayer[playersTurn].classList.add('player--active');
  gameOver = false;
}
function hold() {
  if (!gameOver) {
    score[playersTurn] += currentTally;
    updateScore();
    if (score[playersTurn] >= 100) {
      victory(playersTurn);
    } else {
      switchPlayer();
    }
  }
}

function victory(player) {
  dispTally[player].textContent = 'Winner!';
  gameOver = true;
}

function updateScore() {
  // ok, I could do a loop or a for each here, but there are only 2 values, so this is more compact.
  score1.textContent = score[0];
  score2.textContent = score[1];
  tally1.textContent = 0;
  tally2.textContent = 0;
}

function takeTurn() {
  if (!gameOver) {
    let latestRoll = rollTheBones();
    const player = playersTurn;
    if (latestRoll === 1) {
      piggy(player);
    } else {
      updateTally(latestRoll);
    }
  }
}

function updateTally(newvalue) {
  currentTally += newvalue;
  dispTally[playersTurn].textContent = currentTally;
}
function piggy(player) {
  dispBusted[player].classList.remove('hidden');
  setTimeout(function () {
    dispBusted[player].classList.add('hidden');
  }, 1000);
  currentTally = 0;
  switchPlayer();
}

function rollTheBones() {
  let result = Math.trunc(Math.random() * 6 + 1);
  //  document.querySelector('.dice').src = dieSrc;
  diceImage.src = 'dice-' + result + '.png';
  return result;
}

//Listeners
// Hit space to roll. just for convenience

// document.addEventListener('keydown', function (e) {
//   if (e.code === 'Space') {
//     console.log(rollTheBones());
//     console.log('Active Player: ' + playersTurn);
//     console.log('Inactive Player: ' + inActivePlayer);
//   }
// });

btnRoll.addEventListener('click', takeTurn);
btnHold.addEventListener('click', hold);
btnNewGame.addEventListener('click', resetGame);

setTimeout(function () {
  dispTally[playersTurn].textContent = 0;
}, 2000);
