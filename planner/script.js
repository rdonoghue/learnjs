'use strict';

var eventList = [
  ['From Script 1', 90, 120, 0, 20, 'Hello'],
  ['From Script 2', 60, 220, 1, 50, 'Hello'],
  ['From Script 3', 0, 300, 2, 10, 'Hello'],
  ['From Script 4', 14, 65, 3, 10, 'Another note'],
];

var planContainer = document.querySelector('.planContainer');
var eventContainer = document.querySelector('.eventContainer');
var vertContainer = document.querySelector('.vertBarHolder');
var todayLine = document.createElement('div');

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

var themeBg = [
  'rgba(0,145,147,20%)',
  'rgba(118,77,33,20%)',
  'rgba(0,102,153,20%)',
  'rgba(1,125,147,20%)',
  '#F2C59A',
  'lightgray',
  'pink',
];
var themeBorder = [
  'rgba(0,145,147,100%)',
  'rgba(118,77,33,100%)',
  'rgba(0,102,153,100%)',
  'rgba(1,125,147,100%)',
  '#764D27',
  'darkgray',
  'red',
];
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
var dayMult = 3;
const year = 25;
const baseDate = new Date('1/1/25');
const lineItem = ['From Script 2', '3/1/25', '8/17/25', 0, 20, 'Note'];

// makeEvent('From Script 1', 200, 500, 0, 20, 'Hello');
addToday();

monthPage();

// yearPage(4);

function writeEvent(eventArray, scale = 1) {
  var i = 0;
  while (i < eventArray.length) {
    makeEvent(
      eventArray[i][0],
      eventArray[i][1] * scale,
      eventArray[i][2] * scale,
      eventArray[i][3],
      eventArray[i][4],
      eventArray[i][5]
    );
    i++;
  }

  //   var startDate = new Date(eventArray[1]);
  //   var endDate = new Date(eventArray[2]);
  //   var leftPad =
  //     Math.round((startDate - baseDate) / (1000 * 60 * 60 * 24)) * dayMult;
  //   var barWidth =
  //     Math.round((endDate - startDate) / (1000 * 60 * 60 * 24)) * dayMult;
  //   makeEvent(
  //     eventArray[0],
  //     leftPad,
  //     barWidth,
  //     eventArray[3],
  //     eventArray[4],
  //     eventArray[5]
  //   );
}

function monthPage() {
  clearPlan();

  dayMult = 3;

  let i = 0;
  while (i < month.length) {
    const newMonth = document.createElement('div');
    vertContainer.appendChild(newMonth);
    newMonth.innerText = month[i];
    newMonth.className = 'vertBar';
    i++;
  }
  planContainer.style.width = '1095px';
  //   writeEvent(lineItem);
  writeEvent(eventList, dayMult);
  addToday(dayMult);
}

function yearPage(years) {
  clearPlan();

  dayMult = 1;

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
  planContainer.style.width = 365 * years + 'px';
  //   writeEvent(lineItem);
  writeEvent(eventList, dayMult);
  addToday(dayMult);
}

function makeEvent(name, left, width, color, percent = '', notes = '') {
  const newEvent = document.createElement('div');
  const newEventItem = document.createElement('div');
  const newGraph = document.createElement('div');
  const newNotes = document.createElement('div');
  const graphToolTip = document.createElement('div');

  newEvent.className = 'eventRow';
  newEventItem.className = 'eventItem';
  newEventItem.innerHTML = name;
  newEventItem.style.marginLeft = left + 'px';
  newEventItem.style.width = width + 'px';
  newEventItem.style.backgroundColor = themeBg[color];
  newEventItem.style.borderColor = themeBorder[color];

  newGraph.style.background =
    'linear-gradient(90deg, green ' + percent + '%, white ' + percent + '%)';
  graphToolTip.className = 'toolTip';

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

function clearPlan() {
  vertContainer.innerHTML = '';
  eventContainer.innerHTML = '';
  // planContainer.removeChild(todayLine);

  //   planContainer.innerHTML = '';
  //   planContainer.appendChild(vertContainer);
}

function addToday() {
  const todaysDate = new Date();
  const yearStart = new Date('1/1/25');
  const leftDays =
    Math.round((todaysDate - yearStart) / (1000 * 60 * 60 * 24)) * dayMult;

  todayLine.className = 'todayLine';
  planContainer.appendChild(todayLine);
  updateToday(leftDays);
}

function updateToday(leftDays) {
  todayLine.style.left = leftDays + 'px';
}
