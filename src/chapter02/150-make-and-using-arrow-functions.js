/* eslint-disable func-names, prefer-arrow-callback, no-param-reassign */
/* eslint-disable no-console */

// tag::make-and-function[]
const and = (a, b) => arg => a(arg) && b(arg); // <1>

const gt10 = n => n > 10; // <2>
const even = n => n % 2 === 0; // <3>

const evenAndGt10 = and(gt10, even); // <4>

console.assert(evenAndGt10(15) === false);
console.assert(evenAndGt10(22) === true);
// end::make-and-function[]
export default and;
