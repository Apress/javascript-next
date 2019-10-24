/* eslint-disable no-console */
// tag::068-object-assign[]
const michelle = { // <1>
  name: 'Michelle',
  hobby: 'Gardening',
};

const rachael = Object.assign({}, michelle, { // <2>
  name: 'Rachael',
  profession: 'Auditor',
});

// prints '{ name: 'Rachael', hobby: 'Gardening', profession: 'Auditor' }'
console.log(rachael);

// end::068-object-assign[]
export default rachael;
