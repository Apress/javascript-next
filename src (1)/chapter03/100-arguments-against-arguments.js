/* eslint-disable no-console */
/* eslint-disable space-in-parens, prefer-rest-params */

// tag::arguments-against-arguments-1[]
const byStatus = (a, b) => {
  let ret;
  if (a.status === 'platinum' && b.status !== 'platinum') {
    ret = -1;
  } else if (a.status === 'platinum' && b.status === 'platinum') {
    ret = 0;
  } else if (a.status !== 'platinum' && b.status === 'platinum') {
    ret = 1;
  }
  return ret;
};
// end::arguments-against-arguments-1[]

// tag::arguments-against-arguments-2[]
function boardPlane(pilot, crewMember /** , passengers */ ) {
  const plane = [];
  plane.push(pilot); // <1>
  plane.push(crewMember); // <2>

  const toArr = Array.prototype.slice.call(arguments); // <3>
  const passengers = toArr.slice(2, toArr.length); // <4>
  plane.push(passengers.sort(byStatus)); // <5>
  return plane;
}

const passengerOne = {
  name: 'James',
  status: 'silver',
};
const passengerTwo = {
  name: 'Joseph',
  status: 'platinum',
};
// invoke it
const plane = boardPlane('Amelia', 'Rosemary', passengerOne, passengerTwo);
console.assert(Array.isArray(plane));

// verify pilots and crew board first
console.assert(plane[0] === 'Amelia');
console.assert(plane[1] === 'Rosemary');

// verify that passengers board by status
console.assert(Array.isArray(plane[2]));
console.assert(plane[2][0] === passengerTwo);
console.assert(plane[2][1] === passengerOne);
// end::arguments-against-arguments-2[]
export {
  byStatus,
  boardPlane,
};
