/* eslint-disable no-console, arrow-body-style */
// tag::confusingBody[]

const confuserOne = () => ({ profession: 'JS Ninja' });
// prints '{ profession: 'JS Ninja' }'
console.log(confuserOne());

// alternatively
const confuserTwo = () => {
  return { profession: 'JS Ninja' };
};
// prints '{ profession: 'JS Ninja' }'
console.log(confuserTwo());

// end::confusingBody[]
export {
  confuserOne,
  confuserTwo,
};
