/* eslint-disable no-restricted-syntax, no-console, implicit-arrow-linebreak */
import {
  firstAsyncOp,
  secondAsyncOp,
  thirdAsyncOp,
} from './020-simple-math-using-promises';
// tag::050-simple-math-using-async-await[]
const result = (async () => { // <1>
  const firstAsyncOpResult = await firstAsyncOp(); // <2>
  const secondAsyncOpResult = await secondAsyncOp(firstAsyncOpResult); // <3>
  const res = await thirdAsyncOp(secondAsyncOpResult);

  return res; // <4>
})();

result.then((r) => { // <5>
  console.log('Using async/await', r);
  return r;
});
// end::050-simple-math-using-async-await[]
export {
  firstAsyncOp,
  secondAsyncOp,
  thirdAsyncOp,
  result,
};
