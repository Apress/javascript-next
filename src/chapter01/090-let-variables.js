/* eslint-disable no-unused-vars, no-constant-condition, prefer-const */

// tag::letFunction[]
function letFunction() {
  // console.log('Before defining block', scopedLet); // <1>
  if (true) {
    let scopedLet = 'I am scoped within a block!'; // <2>
  }
  // console.log('After defining block', scopedVar); // <3>
}

// invoke it
letFunction();
// end::letFunction[]
export default letFunction;
