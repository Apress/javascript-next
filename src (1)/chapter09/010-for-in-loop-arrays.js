/* eslint-disable no-console */
/* eslint-disable guard-for-in, no-restricted-syntax, import/prefer-default-export */

// tag::010-for-in-loop-arrays[]
const arr = ['a']; // <1>

for (const k in arr) {
  console.assert(k === '0'); // <2>
  console.log(arr[k]); // <3>
}

// end::010-for-in-loop-arrays[]
export {
  arr,
};
