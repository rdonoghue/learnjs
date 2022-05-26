'use strict';

function returnNumbers(numlist) {
  // Returns sorted list of only the numbers in a list
  let justnums = [];
  for (const nonsense of numlist) {
    if (typeof nonsense === 'number') {
      // console.log(nonsense);
      justnums.push(nonsense);
    }
  }
  return justnums.sort();
}

function isNumber(numbertocheck) {
  return typeof numbertocheck === 'number';
}

function goodRound(toround, signifigantdigits = 2) {
  // takes the number to round and the number of signifigant digits (default 2)  as arguments, returns the number rounded to the given number of signifigant digits.
  return (
    Math.round(toround * 10 ** signifigantdigits) / 10 ** signifigantdigits
  );
}

function returnAverage(numlist) {
  // returns the value of  (ONLY) numbers in an array
  let goodlist = numlist.filter(isNumber);
  let sum = 0;
  for (let iteratedNum of goodlist) {
    sum += iteratedNum;
  }
  // return Math.round((sum / numlist.length) * 100) / 100;
  return goodRound(sum / goodlist.length, 2);
}

const value_list = [10, 45, 'error', 6, 999, -4, 17, 8, '', false];
// Ok, let's get the highest, lowest and average of all the numbers, and just numbers

console.log('Initial list: ' + value_list);

const justnumbers = returnNumbers(value_list);

console.log('Sorted List of Numbers: ' + justnumbers);

console.log('Lowest Value: ' + justnumbers[0]);
console.log('Highest Value: ' + justnumbers[justnumbers.length - 1]);
console.log('Average: ' + returnAverage(justnumbers));

console.log('Arbitrary: ' + returnAverage(value_list));
// This Returns NaN, as you woudl expect given the non-number values.  Could I add some durability to the average function by adding a filter for numbers?

// fixed! Ok, now I shoudl check if there's an easier way to get highest and get lowest?
