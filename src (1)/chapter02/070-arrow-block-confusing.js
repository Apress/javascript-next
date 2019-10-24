/* eslint-disable no-restricted-syntax, no-labels, no-unused-labels */
/* eslint-disable no-unused-expressions, no-console */
// For some reason eslint complains about missing semi here
/* eslint-disable semi */

// tag::confusingBody[]
const confuser = () => { profession: 'JS Ninja' };
// invoke it
console.log(confuser());

// end::confusingBody[]
export default confuser;
