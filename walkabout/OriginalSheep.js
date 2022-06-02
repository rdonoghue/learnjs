'use strict';
const theSheep = document.querySelector('.sheepbox');
const whatevs = document.getElementById('title');
const speedControls = document.querySelectorAll('.controls');

let xAxis = 5;
let yAxis = 5;
let speed = 0;
const speedArray = [1, 5, 10];

function moveSheep() {
  theSheep.style.left = xAxis + 'px';
  theSheep.style.top = yAxis + 'px';
  showAxes();
}

function showAxes() {
  console.log('X', xAxis);
  console.log('Y', yAxis);
}

showAxes();

for (let i = 0; i < speedControls.length; i++) {
  speedControls[i].addEventListener('click', function () {
    console.log(i);
    speedControls[speed].classList.remove('selected');
    speedControls[speed].classList.add('unselected');

    speedControls[i].classList.remove('unselected');
    speedControls[i].classList.add('selected');
    speed = i;
    console.log('Current Speed: ' + speed);
  });
}

document.addEventListener('keydown', function (e) {
  console.log(e.code);
  if (e.code === 'ArrowUp') {
    if (yAxis > 0) {
      yAxis += -speedArray[speed];
    }
  } else if (e.code === 'ArrowDown') {
    if (yAxis < 400) {
      yAxis += speedArray[speed];
    }
  } else if (e.code === 'ArrowRight') {
    if (xAxis < 400) {
      xAxis += speedArray[speed];
    }
  } else if (e.code === 'ArrowLeft') {
    if (xAxis > 0) {
      xAxis += -speedArray[speed];
    }
  }
  moveSheep();
});
