/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax, import/prefer-default-export */
// tag::080-generator-return[]

function* generatorFunctionWithTryCatchFinally() {
  try { // <1>
    console.log('Started');
    yield 'some value';
  } catch (error) {
    console.log(`Caught: ${error}`);
  } finally {
    console.log('Finally block');
  }
}

const callee = generatorFunctionWithTryCatchFinally();
console.log(callee.next());
// Started
// { value: 'some value', done: false }
console.log(callee.return()); // <2>
// Finally block
// { value: undefined, done: true }

console.log('----------');

for (const looped of generatorFunctionWithTryCatchFinally()) { // <3>
  console.log(looped);
  // Started
  // some value
  // Finally block
}

console.log('----------');

const c = generatorFunctionWithTryCatchFinally();
console.log(c.next());
// Started
// { value: 'some value', done: false }
console.log(c.throw(new Error('Stop now!'))); // <4>
// Caught: Error: Stop now!
// Finally block
// { value: undefined, done: true }

// end::080-generator-return[]
export {
  generatorFunctionWithTryCatchFinally,
};
