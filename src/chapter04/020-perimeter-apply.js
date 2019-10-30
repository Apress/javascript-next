/* eslint-disable no-console */
// tag::020-perimeter-apply[]
const perimeter = (a, b, c) => a + b + c;

const sides = [9, 8, 3]; // <1>

// prints 20
console.log(perimeter(sides[0], sides[1], sides[2])); // <2>
// end::020-perimeter-apply[]
export default perimeter;
