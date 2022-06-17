'use strict';


function addNumbers1(a,b){
    console.log(a+b);
    return a+b;
    }
    
addNumbers1(3,12); 

let AddNumbersVariable = function (a,b) {return a + b; }

console.log(AddNumbersVariable(7,10));

let AddNumbersArrow = (a,b) => {return a + b}

console.log(AddNumbersArrow(22,6));
