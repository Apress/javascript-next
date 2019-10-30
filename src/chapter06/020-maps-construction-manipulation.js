/* eslint-disable no-console */
// tag::maps-construction-manipulation[]
const obj = {};
const map = new Map(); // <1>

map.set('string', 'is a string'); // <2>
map.set(true, 'is a boolean');

map.set(1, 'is a number').set(obj, 'is an object'); // <3>

console.assert(map.has(1)); // <4>
console.assert(map.get(obj) === 'is an object'); // <5>

map.set(1, 'overrides first'); // <6>
console.assert(map.get(1) === 'overrides first'); // <7>

console.assert(map.delete('string')); // <8>
console.assert(map.has('string') === false);

console.assert(map.delete({}) === false); // <9>

// end::maps-construction-manipulation[]
export {
  obj,
  map,
};
