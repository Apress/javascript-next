/* eslint-disable no-console, indent */
// tag::array-destructuring-defaults[]
const quadrilateral = [10, 15, 10, 15]; // <1>
const [q1 = 10,
       q2 = 20,
       q3 = q1,
       q4 = q2] = quadrilateral; // <2>

console.assert(q1 === 10);
console.assert(q2 === 15);
console.assert(q3 === 10);
console.assert(q4 === 15);

const [sq1 = 10,
       sq2 = sq1,
       sq3 = sq1,
       sq4 = sq1] = []; // <3>

console.assert(sq1 === 10);
console.assert(sq2 === 10);
console.assert(sq3 === 10);
console.assert(sq4 === 10);

// end::array-destructuring-defaults[]
export {
  q1,
  q2,
  q3,
  q4,
  sq1,
  sq2,
  sq3,
  sq4,
};
