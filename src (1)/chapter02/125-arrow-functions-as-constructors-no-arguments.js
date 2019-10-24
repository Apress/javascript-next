/* eslint-disable func-names, lines-around-directive, no-console */
/* eslint-disable prefer-rest-params, no-undef */
// tag::125-arrow-functions-as-constructors-no-arguments[]
function PersonAsRegularFunction(name) { // <1>
  this.name = name;
}
const nate = new PersonAsRegularFunction('Nate'); // <2>
// prints { name: 'Nate' }
console.log(nate);

const PersonAsArrowFunction = (name) => { // <3>
  this.name = name;
};
// const neal = new PersonAsArrowFunction('Neal'); // <4>

function regularFunction() {
  return arguments;
}
// prints { '0': 10, '1': 'a', '2': true, '3': false }
console.log(regularFunction(10, 'a', true, false)); // <5>

const arrowFunction = () => arguments;

// prints 'ReferenceError: arguments is not defined'
// console.log(arrowFunction(10, 'a', true, false)); // <6>
// end::125-arrow-functions-as-constructors-no-arguments[]
export {
  PersonAsRegularFunction,
  PersonAsArrowFunction,
  regularFunction,
  arrowFunction,
};
