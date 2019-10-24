/* eslint-disable no-plusplus, prefer-template */
/* eslint-disable no-loop-func, func-names */
/* eslint-disable no-unused-vars, prefer-const, no-console */
// tag::simulateDom[]
function simulateDom() {
  let pseudoDom = {
    button1: {},
    button2: {},
    button3: {},
  };

  for (let i = 1; i <= 3; i++) { // <1>
    let element = pseudoDom['button' + i];
    element.click = function () {
      return 'Item ' + i + ' is clicked.'; // <2>
    };
  }

  console.log(pseudoDom.button1.click());
  console.log(pseudoDom.button2.click());
  console.log(pseudoDom.button3.click()); // <3>
  return pseudoDom;
}
// prints 'Item 1 is clicked.', 'Item 2 is clicked.', 'Item 3 is clicked.'
simulateDom();
// end::simulateDom[]

export default simulateDom;
