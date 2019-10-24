/* eslint-disable no-console */
// tag::010-basic-promise[]
const shouldResolve = true;
const p = new Promise((resolve, reject) => { // <1>
  if (shouldResolve) {
    resolve('I transitioned successfully'); // <2>
  } else {
    reject(new Error('I failed to resolve')); // <3>
  }
});
// prints 'Promise { 'I transitioned successfully' }'
console.log(p);
// end::010-basic-promise[]

export default p;
