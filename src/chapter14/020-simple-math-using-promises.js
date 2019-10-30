/* eslint-disable no-restricted-syntax, no-console */
// tag::020-simple-math-using-promises[]
const firstAsyncOp = () => new Promise(res => setTimeout(res, 10, 10)); // <1>
const secondAsyncOp = arg => new Promise(res => setTimeout(res, 10, arg + 20));
const thirdAsyncOp = arg => Promise.resolve(arg + 30);

const result = firstAsyncOp()
  .then(secondAsyncOp) // <2>
  .then(thirdAsyncOp);

result.then((r) => {
  console.log('Using promises', r);
  return r;
});

// end::020-simple-math-using-promises[]
export {
  firstAsyncOp,
  secondAsyncOp,
  thirdAsyncOp,
  result,
};
