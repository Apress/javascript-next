/* eslint-disable import/no-mutable-exports, no-plusplus, object-shorthand */
/* eslint-disable no-var, no-console */
// tag::iefe[]
const counter = (function createCounter() { // <1>
  var steps = 0; // <2>
  function increment() {
    steps++;
  }
  function getCount() {
    return steps;
  }

  return {
    increment: increment,
    getCount: getCount,
  }; // <3>
}());
// use it
// console.log(steps); // <4>
counter.increment(); // <5>
console.assert(counter.getCount() === 1); // <6>
// end::iefe[]
export default counter;
