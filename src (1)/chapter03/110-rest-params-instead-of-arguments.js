/* eslint-disable no-console */
import {
  byStatus
} from './100-arguments-against-arguments'

// tag::rest-params[]
const boardPlane = (pilot, crewMember, ...passengers) => { // <1>
  const plane = [];
  plane.push(pilot);
  plane.push(crewMember);
  plane.push(passengers.sort(byStatus)); // <2>
  return plane;
};

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

// end::rest-params[]
export {
  boardPlane,
};
