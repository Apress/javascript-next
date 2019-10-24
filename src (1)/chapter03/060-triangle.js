/* eslint-disable no-console */
// tag::triangle[]
const triangle = (a, b = a, c = Math.hypot(a, b)) => [a, b, c];

// prints '[ 6, 4, 7.211102550927979 ]'
console.log(triangle(6, 4));
// prints '[ 10, 10, 14.142135623730951 ]'
console.log(triangle(10));

// end::triangle[]
export default triangle;
