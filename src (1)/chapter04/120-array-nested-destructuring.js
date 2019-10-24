/* eslint-disable no-console */
// tag::nested-array-destructuring[]
const ticTacToe = [
  ['x', 'o', 'x'],
  ['o', 'x', 'o'],
  ['x', 'o', 'x'],
];

const [
  [cell01] = [],
  [, cell11] = [],
  [, , cell22] = [], // <1>
] = ticTacToe; // <2>

console.assert(cell01 === 'x');
console.assert(cell11 === 'x');
console.assert(cell22 === 'x');
// end::nested-array-destructuring[]

export {
  ticTacToe,
  cell01,
  cell11,
  cell22,
};
