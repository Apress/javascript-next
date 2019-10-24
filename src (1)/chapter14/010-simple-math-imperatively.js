/* eslint-disable no-restricted-syntax, no-console */
// tag::010-simple-math-imperatively[]
const firstSyncOp = () => 10; // <1>
const secondSyncOp = arg => arg + 20;
const thirdSyncOp = arg => arg + 30;

const firstSyncOpResult = firstSyncOp(); // <2>
const secondSyncOpResult = secondSyncOp(firstSyncOpResult);
const result = thirdSyncOp(secondSyncOpResult);

// prints 'Using synchronous operations 60'
console.log('Using synchronous operations', result);
// end::010-simple-math-imperatively[]
export {
  firstSyncOp,
  secondSyncOp,
  thirdSyncOp,
  result,
};
