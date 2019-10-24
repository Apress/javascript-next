/* eslint-disable no-console */
// tag::const-references[]
const VALUE_REFERENCE = 'This cannot be re-assigned'; // <1>
const ARRAY_REFERENCE = ['I', 'am', 'mutable']; // <2>

// attempt re-assignment
// VALUE_REFERENCE = false
// ARRAY_REFERENCE = {} // <3>

// Mutate the array object
ARRAY_REFERENCE.push('!'); // <4>
// prints [ 'I', 'am', 'mutable', '!' ]
console.log(ARRAY_REFERENCE);
// end::const-references[]
export {
  VALUE_REFERENCE,
  ARRAY_REFERENCE,
};
