'use strict';
const theSheep = document.querySelector('.sheepbox');
const whatevs = document.getElementById('title');
const speedControls = document.querySelectorAll('.controls');
const goButton = document.querySelector('.go');

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

function smoothMove() {
  if (pos > 400) {
    clearInterval(id);
  } else {
    pos += 1;
    theSheep.style.top = pos + 'px';
    theSheep.style.left = pos + 'px';
  }
}

// let increment = 0;
// let test2 = setInterval(doSomething, 1000);

// function doSomething() {
//   if (increment > 9) {
//     clearInterval(test2);
//   } else {
//     console.log('ping');
//   }
// }

let pos = 5;
let id = '';
goButton.addEventListener('click', function () {
  console.log('Go Button Clicked');
  pos = 5;
  id = setInterval(smoothMove, 10);
});

document.addEventListener('keydown', function (e) {
  console.log(e.code);
  if (e.code === 'ArrowUp') {
    if (yAxis > 0) {
      yAxis += -speedArray[speed];
    }
  }
});

// document.addEventListener('keydown', function (e) {
//   console.log(e.code);
//   if (e.code === 'ArrowUp') {
//     if (yAxis > 0) {
//       yAxis += -speedArray[speed];
//     }
//   } else if (e.code === 'ArrowDown') {
//     if (yAxis < 400) {
//       yAxis += speedArray[speed];
//     }
//   } else if (e.code === 'ArrowRight') {
//     if (xAxis < 400) {
//       xAxis += speedArray[speed];
//     }
//   } else if (e.code === 'ArrowLeft') {
//     if (xAxis > 0) {
//       xAxis += -speedArray[speed];
//     }
//   }
//   moveSheep();
// });
