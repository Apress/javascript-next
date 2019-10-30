/* eslint-disable no-console */
// tag::symbol-for[]

const global = Symbol.for('globally visible'); // <1>
const otherGlobal = Symbol.for('globally visible'); // <2>

// prints 'true'
console.log(global === otherGlobal); // <3>
// end::symbol-for[]

export {
  global,
  otherGlobal,
};
