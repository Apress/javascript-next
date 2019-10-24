/* eslint-disable no-console */
/* eslint-disable func-names */
// tag::010-basic-class[]
function Person(name) { // <1>
  this.name = name;
}

Person.prototype.getName = function () { // <2>
  return this.name;
};

Person.prototype.sayHello = function (to) { // <3>
  return `Hello ${to.getName()}. My name is ${this.name}.`;
};

const raju = new Person('Raju');
const venkat = new Person('Venkat');
// prints 'Hello Venkat. My name is Raju'
console.log(raju.sayHello(venkat));
// end::010-basic-class[]
export {
  Person,
  raju,
  venkat,
};
