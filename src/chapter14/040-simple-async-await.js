/* eslint-disable no-restricted-syntax, no-console */
// tag::040-simple-async-await[]
const firstAsyncOp = () => new Promise(res => setTimeout(res, 10, 10)); // <1>

(async () => { // <2>
  const result = await firstAsyncOp(); // <3>
  // prints '10'
  console.log(result);
  return result;
})();
// end::040-simple-async-await[]
export default firstAsyncOp;
