/* eslint-disable func-names, no-console, implicit-arrow-linebreak */
// tag::030-simple-async[]
const implicitPromise = async () =>
  ['Implicitly', 'wrapped', 'in', 'a', 'promise']; // <1>
implicitPromise().then(console.log);

const explicitPromise = async () =>
  Promise.resolve(['This', 'just', 'returns', 'the', 'promise']); // <2>
explicitPromise().then(console.log);
// end::030-simple-async[]
export {
  implicitPromise,
  explicitPromise,
};
