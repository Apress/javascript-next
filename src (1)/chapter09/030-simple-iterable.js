/* eslint-disable no-console */
/* eslint-disable no-plusplus, no-restricted-syntax, import/prefer-default-export */
// tag::030-simple-iterable-for-loop[]
// tag::030-simple-iterable[]
const arrayList = { // <1>
  data: [1, 2, 3, 4, 5],
  [Symbol.iterator]() { // <2>
    let index = 0;
    return { // <3>
      next: () => { // <4>
        if (index === this.data.length) {
          return {
            done: true, // <5>
          };
        }
        const ret = this.data[index];
        index++;
        return {
          done: false,
          value: ret,
        }; // <6>
      },
    };
  },
};

const iterator = arrayList[Symbol.iterator](); // <7>
// prints '{ done: false, value: 1 }'
console.log(iterator.next()); // <8>
// end::030-simple-iterable[]

// tag::030-simple-iterable-1[]
// use the arrayList implementation from our earlier example
for (const v of arrayList) {
  // prints // 1, 2, 3, 4, 5 in sequence
  console.log(v);
}
// end::030-simple-iterable-1[]
export default arrayList;
