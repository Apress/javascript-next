/* eslint-disable no-console */
// tag::string-match[]

const url = 'https://admin:supersecret@gitlab.com/looselytyped/sample-repo.git'; // <1>
const split = url.match(/\w+:\w+/); // <2>

// prints
// [
//   'admin:supersecret',
//   index: 8,
//   input: 'https://admin:supersecret@gitlab.com/looselytyped/sample-repo.git',
//   groups: undefined
// ]
console.log(split);

// end::string-match[]
export {
  url,
  split,
};
