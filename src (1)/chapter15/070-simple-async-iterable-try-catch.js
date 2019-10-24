/* eslint-disable class-methods-use-this, semi, no-console */
/* eslint-disable no-restricted-syntax */
// tag::070-simple-async-iterable-try-catch[]
class SimpleRejectingIterable {
  [Symbol.asyncIterator]() {
    return {
      next: () => Promise.reject(new Error('Error!')), // <1>
    };
  }
}

(async () => {
  try {
    for await (const n of new SimpleRejectingIterable()) {
      // we will never get here
      console.log(n);
    }
  } catch (e) {
    console.log('Error', e); // <2>
  }
})();
// end::070-simple-async-iterable-try-catch[]
export default SimpleRejectingIterable;
