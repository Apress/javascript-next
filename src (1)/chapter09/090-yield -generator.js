/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
// tag::090-yield*-generator[]

function* inner() { // <1>
  yield 'b';
  yield 'c';
  yield 'd';
}

function* outer() { // <2>
  yield 'a';
  console.log('after the first outer yield');
  yield* [1, 2, 3]; // <3>
  console.log('after finishing the inner yield*');
  yield 'e';
}

for (const v of outer()) {
  console.log(v);
}
// a
// after the first outer yield
// b
// c
// d
// after finishing the inner yield*
// e

// end::090-yield*-generator[]
export {
  inner,
  outer,
};
