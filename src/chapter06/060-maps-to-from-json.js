/* eslint-disable no-console */
// tag::serializing-maps[]
const nihar = new Map([
  ['car', 'mazda'],
  ['residence', 'apartment'],
]);

const mapToJson = map => JSON.stringify([...map]); // <1>
const jsonToMap = mapStr => new Map(JSON.parse(mapStr)); // <2>

const serialized = mapToJson(nihar);
// prints '[["car","mazda"],["residence","apartment"]]'
console.log(serialized);

const deserialized = jsonToMap(serialized);
// prints 'Map { 'car' => 'mazda', 'residence' => 'apartment' }'
console.log(deserialized);

// end::serializing-maps[]
export {
  nihar,
  serialized,
  deserialized,
};
