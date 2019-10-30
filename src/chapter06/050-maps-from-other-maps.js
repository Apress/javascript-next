/* eslint-disable no-console */
// tag::concatenating-maps[]
const nihar = new Map([
  ['car', 'mazda'],
  ['residence', 'apartment'],
]);

const ericka = new Map([
  ['pet', 'oscar'],
  ['residence', 'house'],
]);

const union = new Map([...nihar, ...ericka]); // <1>

console.assert(union.get('car') === 'mazda');
console.assert(union.get('residence') === 'house'); // <2>
console.assert(union.get('pet') === 'oscar');
// end::concatenating-maps[]

export default union;
