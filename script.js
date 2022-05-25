'use strict';

function returnNumbers(numlist) {
  let justnums = [];
  for (const nonsense of numlist) {
    if (typeof nonsense === 'number') {
      // console.log(nonsense);
      justnums.push(nonsense);
    }
  }
  justnums = justnums.sort();
  return justnums;
}

let value_list = [10, 45, 'error', 6, 999, -4, 17, 8, '', false];
// Ok, let's get the highest, lowest and average of all the numbers, and just numbers

console.log(value_list);

console.log('after filtering for numbers');

const justnumbers = returnNumbers(value_list);

console.log(justnumbers);

console.log('Lowest Value: ' + justnumbers[0]);
console.log('Highest Value: ' + justnumbers[justnumbers.length - 1]);
