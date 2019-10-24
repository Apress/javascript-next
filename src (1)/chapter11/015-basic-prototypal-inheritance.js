/* eslint-disable no-console */
/* eslint-disable func-names */
import {
  Person,
  venkat,
} from './010-basic-class';

// tag::015-basic-prototypal-inheritance[]
function SuperHero(name, superpower) { // <1>
  // super call - can pass args
  Person.call(this, name); // <2>
  this.superpower = superpower;
}

SuperHero.prototype = Object.create(Person.prototype); // <3>

SuperHero.prototype.warCry = function () { // <4>
  return `My name is ${this.name}!!!`;
};

SuperHero.prototype.constructor = SuperHero; // <5>

const thor = new SuperHero('Thor', 'Mjolnir');
// prints 'My name is Thor!!!'
console.log(thor.warCry());
// prints 'Hello Venkat. My name is Thor'
console.log(thor.sayHello(venkat));
// end::015-basic-prototypal-inheritance[]
export {
  SuperHero,
  thor,
};
