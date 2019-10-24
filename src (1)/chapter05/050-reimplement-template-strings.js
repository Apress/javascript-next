/* eslint-disable no-console */
// tag::050-reimplement-template-strings[]
const handler = (strings, ...values) => { // <1>
  const interleave = (arr1, arr2) => arr1.reduce((arr, v, i) => arr.concat(v, arr2[i]), []);

  return interleave(strings, values).join('');
};

const greeting = 'Hello';
const name = 'Ernest';

const msg = handler`${greeting}! My name is ${name}.`; // <2>
// prints 'Hello! My name is Ernest.'
console.log(msg);
// end::050-reimplement-template-strings[]
export {
  handler,
  greeting,
  name,
  msg,
};
