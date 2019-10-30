/* eslint-disable no-restricted-syntax, no-console */
import {
  randomTimeout,
} from './010-asynchronous-iteration';

// tag::020-asynchronous-generator-async-await[]
const promiseList = [
  randomTimeout(10, 1),
  randomTimeout(20, 2),
  randomTimeout(30, 3),
];

(async () => {
  for (const p of promiseList) {
    const res = await p; // <1>
    console.log(res);
  }
})();
// end::020-asynchronous-generator-async-await[]
export default promiseList;
