/* eslint-disable no-console, indent */
/* eslint-disable arrow-body-style */

// tag::array-destructuring-defaults[]
const perimeter = ([s1 = 10,
                    s2 = s1,
                    s3 = s1,
                    s4 = s2] = []) => { // <1>
  return s1 + s2 + s3 + s4;
};

console.assert(perimeter() === 40); // <2>
console.assert(perimeter([]) === 40); // <3>
console.assert(perimeter([15]) === 60); // <4>
console.assert(perimeter([15, 20]) === 70); // <5>
console.assert(perimeter([15, 20, 18, 23]) === 76); // <6>
// end::array-destructuring-defaults[]

export default perimeter;
