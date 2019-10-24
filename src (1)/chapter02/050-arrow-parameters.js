// tag::parameterList[]

const noop = () => {}; // <1>
const identity = n => n; // <2>
const get = (obj, k) => obj[k]; // <3>

// end::parameterList[]
export {
  noop,
  identity,
  get,
};
