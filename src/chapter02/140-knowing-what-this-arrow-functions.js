/* eslint-disable object-shorthand, func-names, prefer-rest-params */
/* eslint-disable no-console */

// tag::knowing-this[]
const neo = {
  friends: [
    'Morpheus',
    'Brian',
    'Switch',
  ],
  addFriends: function () {
    const args = Array.prototype.slice.call(arguments);
    args.forEach(f => this.friends.push(f)); // <2>
  },
};
// invoke addFriends
neo.addFriends('Niobe', 'Tank'); // <1>
// prints '[ 'Morpheus', 'Brian', 'Switch', 'Niobe', 'Tank' ]'
console.log(neo.friends);
// end::knowing-this[]
export default neo;
