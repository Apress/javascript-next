/* eslint-disable no-console */
// tag::symbol-keyFor[]

const global = Symbol.for('a unique key'); // <1>
const key = Symbol.keyFor(global); // <2>

// prints 'true'
console.log(key === 'a unique key');
// end::symbol-keyFor[]
export {
  global,
  key,
};

