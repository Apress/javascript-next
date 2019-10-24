/* eslint-disable no-console */
/* eslint-disable no-plusplus, no-restricted-syntax, import/prefer-default-export */
// tag::035-for-of-loop-array[]
const arr = ['a', 'b', 'c']; // <1>

for (const k of arr) { // <2>
  // prints `a`, 'b', 'c' in sequence
  console.log(k); // <3>
}
// end::035-for-of-loop-array[]
export default arr;
