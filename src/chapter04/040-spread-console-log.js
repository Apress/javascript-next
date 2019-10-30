/* eslint-disable no-console */
/* eslint-disable guard-for-in, no-restricted-syntax, eqeqeq */

const printIt = () => {
  // tag::spread-console-log[]
  const arr = [12, -3, 15, 44, 15, 36]; // <1>

  // prints '[ 12, -3, 15, 44, 15, 36 ]'
  console.log(arr); // <2>
  // prints '12 -3 15 44 15 36'
  console.log(...arr); // <3>

  // to get the same result as we did with the spread operator
  let temp = '';
  for (const i in arr) {
    temp += arr[i];
    if (i != (arr.length - 1)) {
      temp += ' ';
    }
  }
  console.assert(temp === '12 -3 15 44 15 36'); // <4>

  // end::spread-console-log[]
  return [arr, temp];
};
export default printIt;
