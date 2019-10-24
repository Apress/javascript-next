/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */

// tag::070-simple-generator-push[]

function* generatorWithPushDemo() {
  const first = yield 10;
  console.log('First time', first);
  const second = yield 20;
  console.log('Second time', second);
}

const generator = generatorWithPushDemo(); // prints nothing to the log
console.assert(generator !== undefined);

// following each line is what you see in the console
console.log(generator.next()); // <1>
// { value: 10, done: false }
console.log(generator.next('sending a value in')); // <2>
// First time sending a value in
// { value: 20, done: false }
console.log(generator.next('sending another value in')); // <3>
// Second time sending another value in
// { value: undefined, done: true }

// end::070-simple-generator-push[]
export {
  generatorWithPushDemo,
};
