/* eslint-disable no-console */
// tag::065-object-api-defineProperties-enumerable[]
const michelle = {};
Object.defineProperties(michelle, { // <1>
  name: {
    value: 'Michelle', // <2>
  },
  hobby: {
    value: 'Gardening',
  },
});

// prints 'Michelle'
console.log(michelle.name);
// prints 'Gardening'
console.log(michelle.hobby);
// end::065-object-api-defineProperties-enumerable[]
export default michelle;
