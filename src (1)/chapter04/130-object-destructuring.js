/* eslint-disable no-console */
// tag::object-destructuring[]

const paip = {
  name: 'Paradigms of Artificial Intelligence Programming',
  author: 'Peter Norvig',
  isbn: 1558601910,
}; // <1>

const {
  name: n,
  isbn: id,
} = paip; // <2>

console.assert(n === 'Paradigms of Artificial Intelligence Programming');
console.assert(id === 1558601910);

const {
  name,
  isbn,
} = paip; // <3>

console.assert(name === 'Paradigms of Artificial Intelligence Programming');
console.assert(isbn === 1558601910);
// end::object-destructuring[]
export {
  paip,
  n,
  id,
  name,
  isbn,
};
