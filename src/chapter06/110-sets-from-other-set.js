/* eslint-disable no-console */
// tag::concatenating-sets[]
const colorsOne = new Set([
  'red',
  'blue',
]);

const colorsTwo = new Set([
  'yellow',
  'blue',
]);

const union = new Set([...colorsOne, ...colorsTwo]); // <1>

console.assert(union.has('red'));
console.assert(union.has('blue')); // <2>
console.assert(union.has('yellow'));
// end::concatenating-sets[]

export default union;
