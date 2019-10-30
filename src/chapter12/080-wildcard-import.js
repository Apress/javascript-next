/* eslint-disable no-console */
// tag::080-wildcard-import[]

/*
'050-alias-exports' exports the following
export {
  degreesToRadians,
  gradiansToRadians,
  sin as sine,
  cos as cosine,
  tan,
  trig as trignometry,
};
*/
import * as trigFns from './050-alias-exports'; // <1>

console.log(trigFns.sine(0)); // <2>
// end::080-wildcard-import[]

// for testing
export default trigFns;
