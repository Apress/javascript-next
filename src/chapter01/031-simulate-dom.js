/* eslint-disable no-var, vars-on-top, no-plusplus, prefer-template */
/* eslint-disable no-loop-func, func-names, no-console */

// tag::simulateDom[]
function simulateDom() {
  var pseudoDom = {
    button1: {},
    button2: {},
    button3: {},
  }; // <1>

  for (var i = 1; i <= 3; i++) {
    var element = pseudoDom['button' + i];
    element.click = function () {
      return 'Item ' + i + ' is clicked.'; // <2>
    };
  }

  console.log(pseudoDom.button1.click());
  console.log(pseudoDom.button2.click());
  console.log(pseudoDom.button3.click()); // <3>
  return pseudoDom;
}
// prints 'Item 4 is clicked.' 3 times
simulateDom();
// end::simulateDom[]

export default simulateDom;
