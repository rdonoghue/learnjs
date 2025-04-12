'use strict';

var planContainer = document.querySelector('.planContainer');
var eventContainer = document.querySelector('.eventContainer');
var vertContainer = document.querySelector('.vertBarHolder');
var m12mlink = document.getElementById('12m');
var q8qlink = document.getElementById('8q');
var q16qlink = document.getElementById('16q');

m12mlink.addEventListener('click', function () {
  monthPage();
});
q8qlink.addEventListener('click', function () {
  yearPage(2);
});
q16qlink.addEventListener('click', function () {
  yearPage(4);
});

var themeBg = ['rgba(0,145,147,30%)', 'lightgray', 'pink'];
var themeBorder = ['rgba(0,145,147,30%)', 'darkgray', 'red'];
const month = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];
const year = 25;

makeEvent('From Script 1<br>Second Line', 200, 500, 0, 20, 'Hello');
makeEvent('From Script 2', 180, 360, 1);
makeEvent('From Script 3', 480, 336, 2);
makeEvent(
  'A somewhat longer item From Script 4',
  600,
  120,
  2,
  30,
  'Notes of Interest'
);

// monthPage();
yearPage(4);

var startDate = new Date('2025-01-02');
var secondDate = new Date();
var dateDif = (secondDate - startDate) / (1000 * 60 * 60 * 24);
console.log(startDate);
console.log(secondDate);
console.log(Math.round(dateDif));

function monthPage() {
  vertContainer.innerHTML = '';

  let i = 0;
  while (i < month.length) {
    const newMonth = document.createElement('div');
    vertContainer.appendChild(newMonth);
    newMonth.innerText = month[i];
    newMonth.className = 'vertBar';
    i++;
  }
  planContainer.style.width = '1095px';
}

function yearPage(years) {
  vertContainer.innerHTML = '';

  let currentYear = year;
  let y = 0;
  while (y < years) {
    let q = 1;
    while (q < 5) {
      const newMonth = document.createElement('div');
      vertContainer.appendChild(newMonth);
      newMonth.innerText = currentYear + 'Q' + q;
      newMonth.className = 'vertBar';
      q++;
    }
    y++;
    currentYear++;
  }
  var widthValue = 365 * years;
  planContainer.style.width = 365 * years + 'px';
}

function makeEvent(name, left, width, color, percent = '', notes = '') {
  const newEvent = document.createElement('div');
  const newEventItem = document.createElement('div');
  const newGraph = document.createElement('div');
  const newNotes = document.createElement('div');

  newEvent.className = 'eventRow';
  newEventItem.className = 'eventItem';
  newEventItem.innerHTML = name;
  newEventItem.style.marginLeft = left + 'px';
  newEventItem.style.width = width + 'px';
  newEventItem.style.backgroundColor = themeBg[color];
  newEventItem.style.borderColor = themeBorder[color];

  newGraph.style.background =
    'linear-gradient(90deg, green ' + percent + '%, white ' + percent + '%)';

  newGraph.className = 'graph';

  newNotes.className = 'notes';
  newNotes.innerText = notes;

  eventContainer.appendChild(newEvent);
  newEvent.appendChild(newEventItem);
  newEventItem.appendChild(newNotes);
  newEventItem.appendChild(newGraph);

  if (width < 150) {
    newEventItem.style.textWrap = 'nowrap';
  }
}
