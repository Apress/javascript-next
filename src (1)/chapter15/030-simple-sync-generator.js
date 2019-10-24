/* eslint-disable no-restricted-syntax, no-console */
import {
  randomTimeout,
} from './010-asynchronous-iteration';

// tag::030-simple-sync-generator[]
function* asyncGenerator() { // <1>
  yield randomTimeout(10, 1); // <2>
  console.log('First time');
  yield randomTimeout(20, 2);
  console.log('Second time');
}

const generator = asyncGenerator(); // <3>
// prints '{ value: Promise { <pending> }, done: false }'
console.log(generator.next());
// prints '{ value: Promise { <pending> }, done: false }'
console.log(generator.next());
// prints '{ value: undefined, done: true }'
console.log(generator.next());

for (const i of asyncGenerator()) {
  console.log(i);
}

(async () => {
  for (const p of asyncGenerator()) {
    const res = await p;
    console.log(res);
  }
})();
// end::030-simple-sync-generator[]
export default asyncGenerator;
