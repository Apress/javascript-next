/* eslint-disable guard-for-in, no-restricted-syntax */
/* eslint-disable space-in-parens, spaced-comment, prefer-rest-params */

// tag::using-arguments[]
function add( /**args*/ ) {
  let result = 0;
  for (const i in arguments) {
    result += arguments[i];
  }
  return result;
}
// prints '20'
console.log(add(2, 3, 5, 10));
// end::using-arguments[]
export default add;
