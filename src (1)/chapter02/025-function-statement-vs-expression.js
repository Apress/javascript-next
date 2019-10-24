/* eslint-disable no-console */
/* eslint-disable func-names, no-use-before-define */
// tag::025-function-statement-vs-expression[]
// invoke it before defining it
fnStatement(); // <1>
function fnStatement() { // <2>
  console.log('I am a function statement');
}
// invoke it
fnStatement();

// fnExpression(); // <3>
const fnExpression = function () { // <4>
  console.log('I am a function expression');
};
// invoke it
fnExpression();

// end::025-function-statement-vs-expression[]
export {
  fnStatement,
  fnExpression,
};
