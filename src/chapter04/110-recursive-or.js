/* eslint-disable no-console */
// tag::recursive-or[]

const or = (...args) => {
  if (args.length === 0) return null;
  if (args.length === 1) return args[0]; // <1>
  const [first, ...rest] = args; // <2>
  return first || or(...rest); // <3>
};

console.assert(or(null, undefined, true, false, '1'));
console.assert(!or(null, undefined, false));
// end::recursive-or[]

export default or;
