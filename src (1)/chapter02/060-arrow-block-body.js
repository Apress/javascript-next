/* eslint-disable no-console */
// tag::blockBody[]
const reducer = (acc, n) => { // <1>
  acc.push(n);
  return acc; // <2>
};

 // prints '[ 2, 3, 1 ]'
console.log(reducer([2, 3], 1));

// end::blockBody[]
export default reducer;
