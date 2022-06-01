'use strict';

const modal = document.querySelector('.modal');
const allModals = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnAllClose = document.querySelectorAll('.close-modal');
const btnOpenModal = document.querySelector('.show-modal');
const btnOpenModalAll = document.querySelectorAll('.show-modal');
const testers = document.querySelector('.toformat');
const allTesters = document.querySelectorAll('.toformat');
const btnChange = document.querySelector('.change-format');

let flip = 'pink';

const closeModal = function () {
  for (let i = 0; i < allModals.length; i++) {
    if (!allModals[i].classList.contains('hidden')) {
      allModals[i].classList.add('hidden');
    }
  }
  if (!overlay.classList.contains('hidden')) {
    overlay.classList.add('hidden');
  }
};
// Trying silly stuff here

btnChange.addEventListener('click', function () {
  console.log('Click Confirmed');
  for (let i = 0; i < allTesters.length; i++) {
    // console.log(allTesters[i].classList);
    if (flip == 'pink') {
      allTesters[i].classList.remove('tester1');
      allTesters[i].classList.add('tester2');
    } else {
      allTesters[i].classList.remove('tester2');
      allTesters[i].classList.add('tester1');
    }
  }
  if (flip == 'pink') {
    flip = 'blue';
  } else {
    flip = 'pink';
  }
});

// function echo(evalue, iter = 0) {
//   // testers.evalue.classlist.remove('tester');
//   // testers.evalue.classlist.add('tester2');
//   evalue[iter].classlist.remove('tester');
//   console.log('---');
//   console.log(evalue);
//   console.log(iter);
//   iter = iter + 1;
// }

// const foobar = ['foo', 'bar', 'baz'];
// allTesters.forEach(echo);

console.log(allTesters);

// more real stuff

for (let i = 0; i < btnOpenModalAll.length; i++) {
  console.log(btnOpenModalAll[i].textContent);
  btnOpenModalAll[i].addEventListener('click', function () {
    allModals[i].classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

for (let i = 0; i < btnAllClose.length; i++) {
  console.log(btnAllClose[i].textContent);
  btnAllClose[i].addEventListener('click', function () {
    if (!allModals[i].classList.contains('hidden')) {
      allModals[i].classList.add('hidden');
    }
    if (!overlay.classList.contains('hidden')) {
      overlay.classList.add('hidden');
    }
  });
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// document.querySelector('body').addEventListener('keypress', function (event) {
//   if (event.code === 'Escape') {
//     for (let i = 0; i < allModals.length; i++) {
//       allModals[i].classList.add('hidden');
//     }
//     overlay.classList.add('hidden');
//   }
// });

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.code === 'Escape') {
    for (let i = 0; i < btnOpenModalAll.length; i++) {
      if (!allModals[i].classList.contains('hidden')) {
        console.log('Checkign if hidden');
        closeModal();
        // allModals[i].classList.add('hidden');
        // overlay.classList.add('hidden');
      }
    }
  }
});

// I definitely made my own life harder with this one my insisting on useing the array of elements for the modals.  if I'd declared each one individually, the code would be MUCH tidier.
