/* eslint-disable no-console */
// tag::060-named-imports[]
/*
'030-named-exports' exports the following
export {
  degreesToRadians,
  gradiansToRadians,
  sin,
  cos,
  tan,
  trig,
}
*/
import { // <1>
  sin,
  cos,
  tan,
} from './030-named-exports';

// use the functions
console.log(sin(0));
// end::060-named-imports[]
export {
  sin,
  cos,
  tan,
};
