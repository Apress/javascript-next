/* eslint-disable func-names, lines-around-directive, strict */
/* eslint-disable no-var, no-console, vars-on-top */

// tag::arrow-lexical-binding[]
'use strict';

const GLOBAL_OBJECT = this; // <1>
const returnMe = () => this; // <2>

var obj1 = {
  name: 'obj1',
  method: returnMe,
};
console.assert(obj1.method() === GLOBAL_OBJECT); // <3>

var obj2 = {
  name: 'obj2',
};
console.assert(returnMe.apply(obj2) === GLOBAL_OBJECT); // <4>
console.assert(returnMe() === GLOBAL_OBJECT); // <5>
// end::arrow-lexical-binding[]
export {
  GLOBAL_OBJECT,
  returnMe,
};
