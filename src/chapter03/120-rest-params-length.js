/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

// tag::rest-params-length[]
function fnExpression(a, b, ...c) {
  console.log(arguments.length);
}

const fnArrow = (a, b, ...c) => {
  // do not get an arguments object
};

console.assert(fnExpression.length === 2); // <1>
console.assert(fnArrow.length === 2); // <2>

// prints '6'
fnExpression(1, 2, 3, 4, 5, 6); // <3>
// end::rest-params-length[]
export {
  fnExpression,
  fnArrow,
};
