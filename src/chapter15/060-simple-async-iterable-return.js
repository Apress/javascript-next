/* eslint-disable no-plusplus, semi, no-console */
/* eslint-disable no-restricted-syntax */
// tag::060-simple-async-iterable-return[]
class SimpleIterable {
  constructor() {
    this.counter = 0;
  }

  [Symbol.asyncIterator]() {
    return {
      next: async () => {
        if (this.counter < 10) {
          this.counter++;
          return { value: this.counter, done: false };
        }
        return { done: true };
      },
      async return() { // <1>
        console.log('Cleaning up');
        return { done: true };
      },
    };
  }
}

(async () => {
  try {
    for await (const n of new SimpleIterable()) { // <1>
      console.log(n);
      return; // <2>
      // or break, or throw new Error()
    }
  } catch (e) {
    console.log('Error', e);
  }
})();
// end::060-simple-async-iterable-return[]
export default SimpleIterable;
