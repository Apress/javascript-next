/* eslint-disable no-console */
/* eslint-disable max-len */
// tag::serializing-maps-fail[]
const obj = {
  name: 'some object',
};

const map = new Map([
  [obj, 'value against an object key'],
]);

const mapToJson = m => JSON.stringify([...m]);
const jsonToMap = mapStr => new Map(JSON.parse(mapStr));

const serialized = mapToJson(map); // <1>
// prints '[[{"name":"some object"},"value against an object key"]]'
console.log(serialized);

const deserialized = jsonToMap(serialized); // <2>
// prints 'Map { { name: 'some object' } => 'value against an object key' }'
console.log(deserialized);
console.assert(deserialized.get(obj) === undefined); // <3>
// end::serializing-maps-fail[]
export {
  map,
  serialized,
  deserialized,
};
