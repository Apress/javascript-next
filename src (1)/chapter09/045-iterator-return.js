/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax, import/prefer-default-export */
/* eslint-disable func-names, object-shorthand, no-plusplus */
// tag::045-iterator-return[]

const incrementor = {
  [Symbol.iterator]() {
    let start = 0;
    return {
      next() {
        return {
          value: start++,
          done: false,
        };
      },
      return: function () { // <1>
        console.log('Cleaning up ...');
        return {
          done: true,
        };
      },
    };
  },
};

for (const v of incrementor) {
  if (v > 10) {
    break; // <2>
  }
  console.log(v);
}

// end::045-iterator-return[]
export {
  incrementor,
};
