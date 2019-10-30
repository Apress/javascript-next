/* eslint-disable no-unused-vars, no-console */
import {
  Person,
} from './020-classes';

// tag::040-classes-static-methods[]
class SuperHero extends Person {
  constructor(name, superpower) {
    super(name);
    this.superpower = superpower;
    SuperHero.internalCount += 1; // <1>
  }

  static count() { // <2>
    return SuperHero.internalCount;
  }
}
SuperHero.internalCount = 0; // <3>

const thor = new SuperHero('Thor', 'Mjolnir');
const blackWidow = new SuperHero('Black Widow', 'weapons specialist');
// prints 'We have 2 superheroes!'
console.log(`We have ${SuperHero.count()} superheroes!`); // <4>
// end::040-classes-static-methods[]
export default SuperHero;
