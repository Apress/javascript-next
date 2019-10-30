/* eslint-disable no-redeclare, no-var, block-scoped-var */
/* eslint-disable no-constant-condition, vars-on-top, no-console */
// tag::insidious[]
function insidious() {
  var functionScoped = 'Outer declaration'; // <1>
  if (true) {
    var functionScoped = 'Inner declaration'; // <2>
  }
  console.log(functionScoped); // <3>
  return functionScoped;
}
// prints 'Inner declaration'
insidious();
// end::insidious[]
export default insidious;
