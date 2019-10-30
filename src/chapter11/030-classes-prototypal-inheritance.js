/* eslint-disable no-console */
import {
  Person,
  venkat,
} from './020-classes';

// tag::030-classes-prototypal-inheritance[]
class SuperHero extends Person { // <1>
  constructor(name, superpower) { // <2>
    super(name); // <3>
    this.superpower = superpower;
  }

  warCry() { // <4>
    return `My name is ${this.name}!!!`;
  }
}

const thor = new SuperHero('Thor', 'Mjolnir');
// prints 'My name is Thor!!!'
console.log(thor.warCry());
// prints 'Hello Venkat. My name is Thor'
console.log(thor.sayHello(venkat));
// end::030-classes-prototypal-inheritance[]
export {
  SuperHero,
  thor,
};
