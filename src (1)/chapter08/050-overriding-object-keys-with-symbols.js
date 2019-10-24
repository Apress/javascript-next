/* eslint-disable quote-props, func-names */

// tag::overriding-object-keys-with-symbols[]
const ITERATOR = Symbol('iterator'); // <1>

const iterableObject = {
  name: 'iterable',
}; // <2>

iterableObject[ITERATOR] = function () {
  return 'I am iterable';
}; // <3>

const objWithExistingKey = {
  iterator: 'some value',
}; // <4>

objWithExistingKey[ITERATOR] = () => 'Works!'; // <5>
// end::overriding-object-keys-with-symbols[]
export {
  ITERATOR,
  iterableObject,
  objWithExistingKey,
};
