/* eslint-disable no-console */
/* eslint-disable no-plusplus, import/prefer-default-export */

// tag::020-es5-fibonacci[]
const fibonacci = (n) => { // <1>
  const result = [];
  let start = 0;
  let next = 1;

  switch (n) {
    case 0:
      break;
    case 1:
      result.push(start);
      break;
    case 2:
      result.push(start);
      result.push(next);
      break;
    default:
      result.push(start);
      result.push(next);
      for (let i = 2; i < n; i++) {
        const val = start + next;
        start = next;
        next = val;
        result.push(val);
      }
  }
  return result;
};

// prints []
console.log(fibonacci(0));
// prints [ 0 ]
console.log(fibonacci(1));
// prints [ 0, 1 ]
console.log(fibonacci(2));
// prints [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
console.log(fibonacci(10));

// end::020-es5-fibonacci[]
export {
  fibonacci,
};
