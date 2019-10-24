/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
// tag::040-loops-for-of-all-datastructures[]

const array = [10, 20, 30, 40, 50];
for (const i of array) {
  console.log(i);
}

const set = new Set(['a', 'set', true, false]);
for (const i of set) {
  console.log(i);
}

const map = new Map([
  ['s', 'is a string'],
  [true, 'is a boolean'],
]);
for (const [k, v] of map) { // <1>
  console.log(`${k}->${v}`);
}

const string = 'ES6 is awesome!';
for (const i of string) {
  console.log(i);
}
// end::040-loops-for-of-all-datastructures[]
export {
  array,
  set,
  map,
  string,
};
