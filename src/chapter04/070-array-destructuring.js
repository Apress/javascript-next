/* eslint-disable no-console */
// tag::array-destructuring[]

const rgba = [239, 15, 255, 0.9]; // <1>
const [r, g, b, a, nonExistent] = rgba; // <2>
console.assert(r === 239);
console.assert(g === 15);
console.assert(b === 255);
console.assert(a === 0.9);
console.assert(nonExistent === undefined); // <3>

const [, , blue] = rgba; // <4>
const blueAgain = rgba[2];

console.assert(blue === b);
console.assert(blueAgain === b);

// end::array-destructuring[]
export {
  r,
  g,
  b,
  a,
  nonExistent,
  blue,
  blueAgain,
};
