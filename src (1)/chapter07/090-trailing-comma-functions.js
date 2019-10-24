/* eslint-disable no-console */

// tag::090-trailing-comma-functions[]
const rate = (
  book,
  starCount, // <1>
) => `You rated '${book}' ${starCount} stars`;

const rating = rate(
  'Practical Common Lisp',
  5, // <2>
);
// prints 'You rated 'Practical Common Lisp' 5 stars'
console.log(rating);
// end::090-trailing-comma-functions[]
export default rate;
