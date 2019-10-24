/* eslint-disable no-console */
/* eslint-disable object-shorthand, func-names */
// tag::revealing-module-pattern[]

const greeter = (function () {
  let greeting = 'Hello'; // <1>

  const exclaim = msg => `${msg}!`; // <2>

  const greet = name => exclaim(`${greeting} ${name}`);

  const salutation = (newGreeting) => {
    greeting = newGreeting;
  };

  return {
    greet: greet,
    salutation: salutation,
  }; // <3>
}()); // <4>

console.assert(greeter.greet('Mason') === 'Hello Mason!');
greeter.salutation('Hola');
console.assert(greeter.greet('Micah') === 'Hola Micah!');

// end::revealing-module-pattern[]
export default greeter;
