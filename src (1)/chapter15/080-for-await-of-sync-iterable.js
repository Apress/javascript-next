/* eslint-disable no-console, no-restricted-syntax */
// tag::080-for-await-of-sync-iterable[]
const randomTimeout = async (val, index) => {
  const timeout = Math.floor(Math.random() * Math.floor(42));
  return new Promise(res => setTimeout(res, timeout, `My value is ${val} at index: ${index}`));
};

const promiseList = [
  randomTimeout(10, 1),
  randomTimeout(20, 2),
  randomTimeout(30, 3),
]; // <1>

(async () => {
  for await (const p of promiseList) { // <2>
    console.log(p);
  }
})();
// end::080-for-await-of-sync-iterable[]
export default promiseList;
