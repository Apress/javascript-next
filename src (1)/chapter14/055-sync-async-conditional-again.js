/* eslint-disable no-restricted-syntax, no-console */
import {
  firstAsyncOp,
  secondAsyncOp,
  thirdAsyncOp,
} from './020-simple-math-using-promises';

// tag::055-sync-async-conditional-again[]
const result = (async () => {
  let firstAsyncOpResult = await firstAsyncOp();
  if (firstAsyncOpResult > 20) { // <1>
    firstAsyncOpResult = await secondAsyncOp(firstAsyncOpResult);
  } else {
    firstAsyncOpResult = await thirdAsyncOp(firstAsyncOpResult);
  }
  return firstAsyncOpResult;
})();

result.then((r) => {
  // prints 'async/await conditional result: 40'
  console.log(`async/await conditional result: ${r}`);
  return r;
});
// end::055-sync-async-conditional-again[]
export default result;
