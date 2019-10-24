/* eslint-disable no-console */
// tag::array-destructuring-rest[]
const movies = ['Momento', 'Batman Begins', 'The Dark Knight'];

const [first, ...rest] = movies; // <1>
console.assert(first === 'Momento');
console.assert(Array.isArray(rest));

const [head, ...tail] = rest; // <2>
console.assert(head === 'Batman Begins');
console.assert(Array.isArray(tail));

// end::array-destructuring-rest[]

export {
  movies,
  first,
  rest,
  head,
  tail,
};
