/* eslint-disable no-console */
// tag::030-perimeter-spread[]
const perimeter = (a, b, c) => a + b + c;

const sides = [9, 8, 3]; // <1>

// prints 20
console.log(perimeter(...sides)); // <2>
// end::030-perimeter-spread[]
export default perimeter;
