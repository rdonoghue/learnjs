'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.show-modal');
const btnOpenModalAll = document.querySelectorAll('.show-modal');

console.log(btnOpenModal);
console.log(btnOpenModalAll);

for (let i = 0; i < btnOpenModalAll.length; i++) {
  console.log(btnOpenModalAll[i].textContent);
  btnOpenModalAll[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

document.querySelector('body').addEventListener('keypress', function (event) {
  if (event.code === 'Escape') {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
