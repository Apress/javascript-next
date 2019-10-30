/* eslint-disable no-console */
/* eslint-disable import/no-named-as-default-member */
// tag::110-default-with-aliased-imports[]

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
  sin as sine, // <2>
  cos as cosine,
  tan,
} from './040-default-exports';

console.log(myTrignometry.sin()); // <3>
console.log(sine(45));

// end::110-default-with-aliased-imports[]
// for testing
export {
  myTrignometry,
  sine,
  cosine,
  tan,
};
