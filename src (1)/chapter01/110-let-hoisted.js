/* eslint-disable import/no-mutable-exports, func-names, quotes */
/* eslint-disable no-var, no-console, no-use-before-define */
// tag::hoisting[]
var foo;
{ // <1>
  foo = function () {
    console.log('I am', bar); // <2>
  };

  let bar = 'Bar'; // <3>
  // prints 'I am Bar'
  foo(); // <4>
}
// end::hoisting[]
export default foo;
