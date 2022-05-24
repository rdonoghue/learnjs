// 'use strict';

// // Array Time
// const samplearray = ['In', 'Square', 'Brackets'];

// // console.log(samplearray);
// // console.log(samplearray[0]);
// // console.log(samplearray.length);

// //last value?
// // console.log(samplearray[samplearray.length -1]);
// samplearray[2]="Somthing Else";
// // console.log(samplearray);
// // note, that worked, even though it's a constant, because it can be manipuated, just not repalces

// // on to array menthods
// let shorty = ['a', 'b', 'c', 'd'];
// shorty.push('e');
// shorty.unshift('x');

// // console.log(shorty.pop());

// // console.log(shorty);
// // shorty.shift(); // drop first
// // console.log(shorty)

// // console.log(shorty.includes('a'));
// // console.log(shorty.indexOf('a'));

// // console.log((shorty.includes('a') ? "Has an A" : "No A"))

// // .length is a property

// // how to iterate an arrya?

// for (const piece of shorty){
//     console.log(piece);
// }

// // Oh jeebus, switch needs a manual break after each section, which is wacky, but I guess it does allow you to bundle multipel conditions.


// // Ok, Objects, the us {}

// const dict = {
//     fname:      'bob',
//     lname:      "jones",
//     hatsize:    "7",
//     scores:     [1,3,5]
//     };



// // console.log(dict.fname)
// // console.log(dict['fname']) // useful if we need an expression here.

// //like so
// let thingy='lname'
// // console.log(dict[thingy])
// // console.log(dict)
// // console.log(dict.scores.length)

// //dumb ternary operator
// console.log((6>2) ? "Nope" : "yep");

// //dumb arrow function

// //Regular function
// function tripler(totriple){
//     return totriple * 3
// }

// // Variable functions
// let tripletwo = function (totriple){return totriple * 3 }
// console.log(tripletwo(4))


// // Arrow function

// const foo3 = foo => {return foo * 3;};
// console.log(foo3(3));
// console.log(foo3(10));
