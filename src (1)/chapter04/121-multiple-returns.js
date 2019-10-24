/* eslint-disable no-console */
// tag::multiple-returns[]
const distanceAndSlope = ([x1, y1], [x2, y2]) => {
  const distance = Math.hypot(x2 - x1, y2 - y1);
  const slope = (y2 - y1) / (x2 - x1);
  return [distance, slope]; // <1>
};

const [dist, slope] = distanceAndSlope([4, 3], [10, 12]); // <2>

console.assert(Number.parseFloat(dist.toFixed(2)) === 10.82);
console.assert(slope === 1.5);
// end::multiple-returns[]

export default distanceAndSlope;
