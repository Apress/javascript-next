/* eslint-disable no-console */
// tag::maps-whole-api[]
const map = new Map([ // <1>
  ['s', 'is a string'], // <2>
  [true, 'is a boolean', 'willBeIgnored'], // <3>
  [1], // <4>
  [], // <5>
]);

console.assert(map.size === 4); // <6>

console.assert(map.get('s') === 'is a string');
console.assert(map.get(true) === 'is a boolean');
console.assert(map.get(1) === undefined);

console.assert(map.get(undefined) === undefined);
console.assert(map.has(undefined));

map.forEach((v, k) => console.log(v, k)); // <7>

console.log(map.entries());
console.log(map.keys());
console.log(map.values()); // <8>
map.clear(); // <9>
console.assert(map.size === 0);
// end::maps-whole-api[]

export default map;
