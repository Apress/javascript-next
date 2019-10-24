/* eslint-disable func-names, prefer-arrow-callback, no-param-reassign */
/* eslint-disable space-before-function-paren, indent, no-console */

const arrayManipulation = function() {
  // tag::arrayManipulation[]
  const nums = [1, 2, 3, 4, 5];

  const result = nums
                  .map(n => n * 3) // <1>
                  .filter(n => (n % 2) === 0) // <2>
                  .reduce((acc, n) => acc + n, 0); // <3>
  // end::arrayManipulation[]
  return result;
};

console.assert(arrayManipulation() === 18);
export default arrayManipulation;
