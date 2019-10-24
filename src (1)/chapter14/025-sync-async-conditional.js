/* eslint-disable no-console, import/no-mutable-exports */
import {
  firstSyncOp,
  secondSyncOp,
  thirdSyncOp,
} from './010-simple-math-imperatively';
import {
  firstAsyncOp,
  secondAsyncOp,
  thirdAsyncOp,
} from './020-simple-math-using-promises';

// tag::025-sync-async-conditional[]
let syncConditionalResult = firstSyncOp();
if (syncConditionalResult > 20) { // <1>
  syncConditionalResult = secondSyncOp(syncConditionalResult);
} else {
  syncConditionalResult = thirdSyncOp(syncConditionalResult);
}

// prints 'Imperative conditional result: 40'
console.log(`Imperative conditional result: ${syncConditionalResult}`);

const asyncConditionalResult = firstAsyncOp()
  .then((val) => {
    if (val > 20) { // <2>
      return secondAsyncOp(val);
    }
    return val; // <3>
  })
  .then(thirdAsyncOp);

asyncConditionalResult.then((r) => {
  // prints 'Chained conditional result: 40'
  console.log(`Chained conditional result: ${r}`);
  return r;
});
// end::025-sync-async-conditional[]
export {
  syncConditionalResult,
  asyncConditionalResult,
};
