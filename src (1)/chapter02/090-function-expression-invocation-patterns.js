/* eslint-disable func-names, lines-around-directive, strict */
/* eslint-disable no-var, no-console, vars-on-top */

// tag::invocation-patterns[]
'use strict';

const returnsThis = function () {
  return this;
};

var obj1 = {
  name: 'obj1',
  method: returnsThis, // <1>
};

console.assert(obj1.method() === obj1); // <2>

var obj2 = {
  name: 'obj2',
};

console.assert(returnsThis.apply(obj2) === obj2); // <3>
console.assert(returnsThis() === undefined); // <4>
// end::invocation-patterns[]
export default returnsThis;
