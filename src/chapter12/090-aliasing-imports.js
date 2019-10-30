// tag::090-aliasing-imports[]

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

import {
  sin as sine, // <1>
  cos as cosine,
  trig as trignometry,
} from './030-named-exports';
// end::090-aliasing-imports[]

// for testing
export {
  sine,
  cosine,
  trignometry,
};
