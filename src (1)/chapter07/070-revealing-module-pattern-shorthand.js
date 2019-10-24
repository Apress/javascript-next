/* eslint-disable no-console */
/* eslint-disable func-names */

// tag::revealing-module-pattern-shorthand[]

const greeter = (function () {
  let greeting = 'Hello';

  const exclaim = msg => `${msg}!`; // <2>

  const greet = name => exclaim(`${greeting} ${name}`);

  const salutation = (newGreeting) => {
    greeting = newGreeting;
  };

  return {
    greet, // <1>
    salutation,
  };
  // equivalent to
  /*
  return {
    greet: greet,
    salutation: salutation
  }
  */
}());

console.assert(greeter.greet('Mason') === 'Hello Mason!');
greeter.salutation('Hola');
console.assert(greeter.greet('Micah') === 'Hola Micah!');

// end::revealing-module-pattern-shorthand[]

export default greeter;
