/* eslint-disable func-names, prefer-arrow-callback, no-param-reassign, indent */
/* eslint-disable indent, no-console */

const arrayManipulation = function () {
  // tag::arrayManipulation[]
  const nums = [1, 2, 3, 4, 5];

  const result = nums
                  .map(function (n) {
                    return n * 3; // <1>
                  })
                  .filter(function (n) {
                    return (n % 2) === 0; // <2>
                  })
                  .reduce(function (acc, n) {
                    return acc + n; // <3>
                  }, 0);
  // end::arrayManipulation[]
  return result;
};

console.assert(arrayManipulation() === 18);
export default arrayManipulation;
