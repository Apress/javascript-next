/* eslint-disable no-console */
/* eslint-disable quote-props, no-dupe-keys, dot-notation */
// tag::objects-keys-strings[]
const obj1 = {
  'true': 'String',
  true: 'Boolean',
}; // <1>

console.assert(obj1[true] === 'Boolean'); // <2>

const obj2 = {
  true: 'Boolean',
  'true': 'String',
}; // <3>

console.assert(obj2[true] === 'String'); // <4>
// end::objects-keys-strings[]
export {
  obj1,
  obj2,
};
