/* eslint-disable no-console */
/* eslint-disable prefer-template */
// tag::005-interpolation[]
const salutation = 'Mr.';
const name = 'Edgar';
const middle = 'Allen';
const last = 'Poe';

const fullName = (salutation ? salutation + ' ' : '') // <1>
                 + name + ' ' + middle.trim() + ' ' + last; // <2>
// prints 'Mr. Edgar Allen Poe'
console.log(fullName);
// end::005-interpolation[]
export default fullName;
