/* eslint-disable no-console */
/* eslint-disable symbol-description, import/prefer-default-export */

// tag::object-enumerate-keys[]
const obj = {
  a: 'a simple property', // <1>
  [Symbol()]: 'a symbol property', // <2>
};

Object.defineProperty(obj, 'nonenumerable', { // <3>
  value: 'an unenumerable property',
  enumerable: false,
});

// prints only '[ 'a' ]'
console.log(Object.keys(obj));
// prints '[ 'a', 'nonenumerable' ]'
console.log(Object.getOwnPropertyNames(obj));
// prints only '{"a":"a simple property"}'
console.log(JSON.stringify(obj)); // <4>
// end::object-enumerate-keys[]

export {
  obj,
};
