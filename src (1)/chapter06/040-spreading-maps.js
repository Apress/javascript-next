/* eslint-disable no-console */
// tag::spreading-maps[]
const firstQuarter = new Map([
  [1, 'Jan'],
  [2, 'Feb'],
  [3, 'Mar'],
  [4, 'Apr'],
]); // <1>

const mapToStr = [...firstQuarter].join(':'); // <2>
console.assert(mapToStr === '1,Jan:2,Feb:3,Mar:4,Apr');

const [,
  [n2, m2],
  [n3, m3],
] = firstQuarter; // <3>

console.assert(n2 === 2);
console.assert(m2 === 'Feb');
console.assert(n3 === 3);
console.assert(m3 === 'Mar');

// end::spreading-maps[]
export default firstQuarter;
