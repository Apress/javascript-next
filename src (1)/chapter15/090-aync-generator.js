/* eslint-disable no-restricted-syntax, no-console, prefer-destructuring, no-unused-vars */
/* eslint-disable no-unused-vars */
// tag::090-aync-generator[]
const randomTimeout = async (val, index) => {
  const timeout = Math.floor(Math.random() * Math.floor(42));
  return new Promise(res => setTimeout(res, timeout, `My value is ${val} at index: ${index}`));
};

async function* asyncGenerator() { // <1>
  yield await randomTimeout(10, 1); // <2>
  console.log('First time');
  yield await randomTimeout(20, 2);
  console.log('Second time');
}

console.log(typeof asyncGenerator()[Symbol.asyncIterator] === 'function');

(async () => {
  const gen = asyncGenerator();
  for await (const item of gen) { // <3>
    console.log('item', item);
  }
})();
// end::090-aync-generator[]
export default asyncGenerator;
