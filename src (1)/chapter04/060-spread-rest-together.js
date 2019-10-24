/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
// tag::spread-and-rest[]
const onlyRest = (teacher, ...students) => {
  return [teacher, students.sort()]; // <1>
};

const restAndSpread = (teacher, ...students) => {
  return [teacher, ...students.sort()]; // <2>
};

// prints '[ 'Ada', [ 'Carol', 'Grace', 'Mary' ] ]'
console.log(onlyRest('Ada', 'Mary', 'Carol', 'Grace'));
// prints '[ 'Ada', 'Carol', 'Grace', 'Mary' ]'
console.log(restAndSpread('Ada', 'Mary', 'Carol', 'Grace'));
// end::spread-and-rest[]
export {
  onlyRest,
  restAndSpread,
};
