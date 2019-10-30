// tag::070-named-aliased-import[]

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

import {
  sine, // <1>
  cosine,
  tan,
  trignometry,
} from './050-alias-exports';
// end::070-named-aliased-import[]

// for testing
export {
  sine,
  cosine,
  tan,
  trignometry,
};
