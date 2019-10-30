/* eslint-disable no-console */
/* eslint-disable prefer-template */

// tag::combination-lookup[]
const user = {
  name: 'douglas',
  profession: 'developer',
  address: {
    street1: '1 Ad Infinitum Drive',
    street2: '',
    city: 'Cupertino',
    state: 'CA',
    zip: [
      '95014',
      '1234',
    ],
  },
};

const { // <1>
  address: { // <2>
    zip: [ // <3>
      zip, // <4>
      extended,
    ],
  },
} = user;

const final = zip + '-' + extended;
console.assert(final === '95014-1234');

// end::combination-lookup[]
export default final;
