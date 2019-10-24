/* eslint-disable no-console */
// tag::069-object-spread[]
const michelle = {
  name: 'Michelle',
  hobby: 'Gardening',
};

const rachael = {
  ...michelle, // <1>
  ...{
    name: 'Rachael',
    profession: 'Auditor',
  },
};

// prints '{ name: 'Rachael', hobby: 'Gardening', profession: 'Auditor' }'
console.log(rachael);

// end::069-object-spread[]
export default rachael;
