/* eslint-disable no-console, no-restricted-syntax */
// tag::067-object-api-defineProperties-enumerable[]
const michelle = {};
Object.defineProperties(michelle, {
  name: {
    value: 'Michelle',
    enumerable: true, // <1>
  },
  hobby: {
    value: 'Gardening', // <2>
  },
});

for (const k in michelle) {
  if (Object.prototype.hasOwnProperty.call(michelle, k)) {
    // only prints 'name'
    console.log(k); // <3>
  }
}
// end::067-object-api-defineProperties-enumerable[]
export default michelle;
