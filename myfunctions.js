'use strict';

function returnNumbers(numlist) {
  // Returns sorted list of only the numbers in a list
  // Requires isNUmber()
  // ok, found the math options for min and max, so don't technically need to sort, but it's tidy, do I'll stick with it.
  return numlist.filter(isNumber).sort();
}
function returnNumbersOld(numlist) {
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
function getMin(numlist) {
  return Math.min.apply(Math, numlist.filter(isNumber));
}
function getMax(numlist) {
  return Math.max.apply(Math, numlist.filter(isNumber));
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
function sumArray(tored) {
  return tored.reduce((a, b) => a + b, 0);
}

function sumArray(tosum) {
  return tosum.filter(isNumber).reduce((a, b) => a + b, 0);
}

function getAvg(toaverage) {
  return goodRound(
    toaverage.filter(isNumber).reduce((a, b) => a + b, 0) /
      toaverage.filter(isNumber).length
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

function getAvgOld(numlist) {
  return (
    numlist.filter(isNumber).reduce((a, b) => a + b, 0) /
    numlist.filter(isNumber).length
  );
}

const value_list = [10, 45, 'error', 6, 999, -4, 17, 8, '', false];

console.log('Initial list: ' + value_list);
console.log('Numbers Only: ' + value_list.filter(isNumber));
console.log('Sorted Numbers: ' + value_list.filter(isNumber).sort());
console.log('Sum: ' + sumArray(value_list));
console.log('Lowest Value: ' + getMin(value_list));
console.log('Highest Value: ' + getMax(value_list));
console.log('Average: ' + returnAverage(value_list));
console.log('Better Average: ' + getAvg(value_list));
// console.log('reduced average ' = getAvg(value_list));
