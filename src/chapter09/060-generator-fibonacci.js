/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */

// tag::060-generator-fibonacci[]
function* fibonacci() {
  let start = 0;
  let next = 1;
  yield start;
  yield next;
  while (true) {
    const result = start + next;
    start = next;
    next = result;
    yield result;
  }
}

const f = fibonacci();
console.log(f.next().value); // 0
console.log(f.next().value); // 1
console.log(f.next().value); // 1
console.log(f.next().value); // 2
console.log(f.next().value); // 3
console.log(f.next().value); // 5
console.log(f.next().value); // 8
// end::060-generator-fibonacci[]
export {
  fibonacci,
};
