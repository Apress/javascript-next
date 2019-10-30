/* eslint-disable no-restricted-syntax, no-console */
// tag::010-asynchronous-iteration[]
const randomTimeout = async (val, index) => {
  const timeout = Math.floor(Math.random() * Math.floor(42)); // <1>
  return new Promise(res => setTimeout(res, timeout, `My value is ${val} at index: ${index}`)); // <2>
};

const promiseList = [
  randomTimeout(10, 1),
  randomTimeout(20, 2),
  randomTimeout(30, 3),
]; // <3>

// prints the following (your ordering might vary)
// My value is 20 at index: 2
// My value is 10 at index: 1
// My value is 30 at index: 3
for (const p of promiseList) {
  p.then(console.log); // <4>
}
// end::010-asynchronous-iteration[]
export default promiseList;
export {
  randomTimeout,
};
