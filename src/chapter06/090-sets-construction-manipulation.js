/* eslint-disable no-console */
// tag::sets-construction-manipulation[]
const obj = {};
const set = new Set(); // <1>

set.add('string'); // <2>
set.add(true);

set.add(1).add(obj); // <3>

console.assert(set.size === 4);

console.assert(set.has(1)); // <4>

set.add(1); // <5>
console.assert(set.size === 4); // <6>

console.assert(set.delete('string')); // <7>
console.assert(set.has('string') === false);

console.assert(set.delete({}) === false); // <8>
// end::sets-construction-manipulation[]
export {
  obj,
  set,
};
