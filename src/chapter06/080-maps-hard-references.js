/* eslint-disable no-console */
/* eslint-disable import/no-mutable-exports */
// tag::maps-hard-references[]
let obj = {
  name: 'some object',
}; // <1>

const map = new Map([
  [obj, 'value against an object key'], // <2>
]);

console.assert(map.has(obj));

obj = null; // <3>

console.assert(map.size === 1); // <4>
// end::maps-hard-references[]
export {
  obj,
  map,
};
