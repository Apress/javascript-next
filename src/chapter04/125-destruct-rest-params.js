/* eslint-disable no-console */
// tag::destruct-rest-params[]
const flatten = ([first, ...rest]) => {
  if (first === undefined) return []; // <1>
  return !Array.isArray(first)
    ? [first, ...flatten(rest)]
    : [...flatten(first), ...flatten(rest)]; // <2>
};

const flattened = flatten([
  [1, 2],
  [3], 4, 5, [6, 7],
]);

console.assert(flattened.length === 7);
console.assert(flattened.join() === '1,2,3,4,5,6,7');

// end::destruct-rest-params[]
export default flatten;
