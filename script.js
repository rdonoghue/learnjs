'use strict';

const markinfo = {
  height: 200,
  mass: 100,
  calcbmi: function () {
    // I didn't need to do let/const?
    this.bmi = this.height + this.mass;
    return this.bmi;
  },
};

//console.log(markinfo.calcbmi())

// Oh! namingit as "this" means It's no on the object!
// but I need to get the whole thing first.
console.log(markinfo.bmi);
