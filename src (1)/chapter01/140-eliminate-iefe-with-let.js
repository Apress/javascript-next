/* eslint-disable import/no-mutable-exports, no-plusplus, object-shorthand */
/* eslint-disable prefer-const, func-names, no-console, prefer-const */
/* eslint-disable no-console */
// tag::block-scope[]
let counter;
{ // <1>
  let steps = 0; // <2>
  let increment = function () { // <3>
    console.log('increment');
    steps++;
  };
  let getCount = function () {
    return steps;
  };

  counter = {
    increment: increment,
    getCount: getCount,
  }; // <4>
}
// use it
// console.log(steps); // <5>
counter.increment(); // <6>
console.assert(counter.getCount() === 1); // <7>
// end::block-scope[]
export default counter;
