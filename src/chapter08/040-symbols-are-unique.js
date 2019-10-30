/* eslint-disable no-console */
/* eslint-disable symbol-description */

// tag::symbols-are-unique[]
const symbol1 = Symbol();
const symbol2 = Symbol(); // <1>
console.assert(symbol1 !== symbol2); // <2>

const symbol3 = Symbol('unique'); // <3>
// prints Symbol(unique)
console.log(symbol3); // <4>

// end::symbols-are-unique[]
export {
  symbol1,
  symbol2,
  symbol3,
};
