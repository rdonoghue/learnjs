'use strict';

const btnRoll = document.querySelector('.btn--roll');
const diceImage = document.querySelector('.dice');

let playersTurn = 1;

let score = [0, 0];
let currentTally = [0, 0];

function takeTurn() {
  let latestRoll = rollTheBones();
  const player = playersTurn;
  if (latestRoll === 1) {
    endTurn(player);
  } else {
    currentTally[player - 1] += latestRoll;
  }
  console.log(
    'Player ' +
      player +
      ' rolls a ' +
      latestRoll +
      ' for a total score of ' +
      currentTally[player - 1]
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
// Hit space to roll. just for convenience
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.code === 'Space') {
    console.log(rollTheBones());
  }
});

btnRoll.addEventListener('click', takeTurn);
