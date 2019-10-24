/* eslint-disable func-names */
/* eslint-disable no-console */
// tag::identity[]
const identity = function (n) { // <1>
  return n;
};

// invoke it
console.assert(identity(42) === 42);

// inspect it
console.assert((typeof identity) === 'function'); // <2>
console.assert(identity.name === 'identity'); // <3>
// end::identity[]
export default identity;
