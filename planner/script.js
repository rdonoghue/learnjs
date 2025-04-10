'use strict';

import { myEvent } from './eventfile.js';

var randomSpace = document.getElementById('jsHolder');
var eventContainer = document.querySelector('.eventContainer');

var themeColors = ['#ffa07a', 'lightgray', 'pink'];

randomSpace.innerHTML = myEvent[1];

makeEvent('From Script 1', 200, 500, 0);
makeEvent('From Script 2', 180, 360, 1);
makeEvent('From Script 3', 480, 336, 2);

const newBucket = document.createElement('div');
const newBucketRow = document.createElement('div');
const newBucketItem1 = document.createElement('div');
const newBucketItem2 = document.createElement('div');

newBucket.className = 'eventBucket';
newBucketRow.classname = 'bucketRow';
newBucketItem1.classname = 'bucketItem';
newBucketItem2.classname = 'bucketItem';

newBucket.style.marginLeft = '300px';

newBucketItem1.style.marginLeft = '0px';
newBucketItem1.style.width = '150px';
newBucketItem1.style.backgroundColor = themeColors[1];
newBucketItem1.textContent = 'Scriptgen1';

newBucketItem2.style.marginLeft = '150px';
newBucketItem2.style.width = '200px';
newBucketItem2.style.backgroundColor = themeColors[1];
newBucketItem2.textContent = 'Scriptgen2';

eventContainer.appendChild(newBucket);
newBucket.appendChild(newBucketRow);
newBucketRow.appendChild(newBucketItem1);
newBucketRow.appendChild(newBucketItem2);

function makeEvent(name, left, width, color) {
  const newEvent = document.createElement('div');
  const newEventItem = document.createElement('div');

  newEvent.className = 'eventRow';
  newEventItem.className = 'eventItem';
  newEventItem.textContent = name;
  newEventItem.style.marginLeft = left + 'px';
  newEventItem.style.width = width + 'px';
  newEventItem.style.backgroundColor = themeColors[color];

  eventContainer.appendChild(newEvent);
  newEvent.appendChild(newEventItem);
}
