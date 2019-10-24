/* eslint-disable no-console */
// tag::rectangle[]
const rectangle = (x, y = x) => [x, y]; // <1>

// prints '[ 2, 2 ]'
console.log(rectangle(2)); // <2>
// prints '[ 5, 12 ]'
console.log(rectangle(5, 12)); // <3>

// end::rectangle[]
export default rectangle;
