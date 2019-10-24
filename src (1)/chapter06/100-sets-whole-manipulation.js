/* eslint-disable no-console */
// tag::sets-whole-api[]
const set = new Set([ // <1>
  'string',
  true,
  1, // <2>
]);

console.assert(set.size === 3); // <3>

console.assert(set.has('string'));
console.assert(set.has(true));
console.assert(set.has(1));

set.forEach(k => console.log(k)); // <4>

console.log(set.entries());
console.log(set.keys()); // <5>
console.log(set.values()); // <6>

set.clear(); // <7>
console.assert(set.size === 0);

// end::sets-whole-api[]

export default set;
