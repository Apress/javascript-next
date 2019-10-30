/* eslint-disable no-console */
// tag::020-classes[]
class Person { // <1>
  constructor(name) { // <2>
    this.name = name;
  }

  getName() { // <3>
    return this.name;
  }

  sayHello(to) { // <4>
    return `Hello ${to.getName()}. My name is ${this.name}.`;
  }
}

const raju = new Person('Raju');
const venkat = new Person('Venkat');
// prints 'Hello Venkat. My name is Raju'
console.log(raju.sayHello(venkat));

// end::020-classes[]
export {
  Person,
  raju,
  venkat,
};
