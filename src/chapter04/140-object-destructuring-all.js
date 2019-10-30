/* eslint-disable no-shadow,arrow-body-style */
/* eslint-disable no-console */

// tag::object-destructuring-all[]
const config = {
  size: 200,
  transitionMs: 750,
  clip: {
    width: 200,
  },
}; // <1>

const {
  size,
  transitionMs,
  clip: { // <2>
    width: w = 100, // <3>
    height = 100,
  } = {}, // <4>
} = config;

console.assert(size === 200);
console.assert(transitionMs === 750);
console.assert(w === 200);
console.assert(height === 100);

const drawChart = ({
  size = 200,
  transitionMs = 1000,
  clip: {
    width: w = 100,
    height = 100,
  } = {},
} = {}) => { // <5>
  return [size, transitionMs, w, height];
};

// invoke it
drawChart();
// end::object-destructuring-all[]
export {
  config,
  size,
  transitionMs,
  w,
  height,
  drawChart,
};
