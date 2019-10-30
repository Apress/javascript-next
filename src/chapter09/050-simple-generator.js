/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax, import/prefer-default-export */
// tag::050-simple-generator[]

function* generatorDemo() {
  yield 10;
  console.log('First time');
  yield 20;
  console.log('Second time');
}

const generator = generatorDemo(); // prints nothing to the log
console.assert(generator !== undefined);

// following each line is what you see in the console
console.log(generator.next());
// { value: 10, done: false }
console.log(generator.next());
// First time
// { value: 20, done: false }
console.log(generator.next());
// Second time
// { value: undefined, done: true }

// alternatively, we can just use the for-of loop
for (const i of generatorDemo()) {
  console.log(i);
}

// end::050-simple-generator[]
export {
  generatorDemo,
};
