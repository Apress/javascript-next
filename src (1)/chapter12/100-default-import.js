/* eslint-disable no-console */
/* eslint-disable import/no-named-as-default-member */
// tag::100-default-import[]

/*
'040-default-exports' exports the following
export {
  degreesToRadians,
  gradiansToRadians,
  sin,
  cos,
  tan,
};

export default trig;
*/
import myTrignometry, { // <1>
  sin,
  cos,
  tan,
} from './040-default-exports';

console.log(myTrignometry.sin()); // <2>
// end::100-default-import[]
// for testing
export {
  myTrignometry,
  sin,
  cos,
  tan,
};
