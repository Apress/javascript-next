/* eslint-disable no-console */
// tag::default-before-required[]

const filter = (coll = [], predFn) => coll.filter(predFn);

// prints '[ 30 ]'
console.log(filter([10, 20, 30], n => n > 25));
// end::default-before-required[]

export default filter;
