/* eslint-disable no-console */
/* eslint-disable prefer-template, prefer-destructuring */
const convolutedLookup = () => {
  // tag::convoluted-lookup[]
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

  const zipCode = user.address.zip[0] + '-' + user.address.zip[1]; // <1>
  console.assert(zipCode === '95014-1234');

  // refactored version
  const zip = user.address.zip; // <2>
  const code = zip[0]; // <3>
  const extended = zip[1];
  const final = code + '-' + extended;
  console.assert(final === '95014-1234');

  // end::convoluted-lookup[]
  return [zipCode, final];
};

export default convolutedLookup;
