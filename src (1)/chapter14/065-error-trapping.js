/* eslint-disable no-restricted-syntax, no-console */
// tag::065-error-trapping[]
const firstAsyncOp = () => new Promise(res => setTimeout(res, 10, 10)); // <1>
const secondAsyncOp = arg => new Promise(res => setTimeout(res, 10, arg + 20));
const thirdAsyncOp = () => Promise.reject(new Error('Oops!')); // <2>

const result = (async () => {
  try { // <3>
    const firstAsyncOpResult = await firstAsyncOp();
    const secondAsyncOpResult = await secondAsyncOp(firstAsyncOpResult);
    const res = await thirdAsyncOp(secondAsyncOpResult);

    return res;
  } catch (e) {
    console.error(e); // <4>
    return 0;
  }
})();

result.then((r) => {
   // prints '0'
  console.log('Using async/await', r);
  return r;
});
// end::065-error-trapping[]
export {
  firstAsyncOp,
  secondAsyncOp,
  thirdAsyncOp,
  result,
};
