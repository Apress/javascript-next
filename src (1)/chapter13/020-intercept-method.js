/* eslint-disable no-restricted-syntax, no-param-reassign, func-names */
/* eslint-disable no-console */
// tag::020-intercept-method[]
const intercept = (obj, interceptionFn) => { // <1>
  for (const m in obj) {
    if ((Object.prototype.hasOwnProperty.call(obj, m)) && (obj[m] instanceof Function)) { // <2>
      const method = obj[m]; // <3>
      obj[m] = function (...args) {
        interceptionFn.call(obj, m); // <4>
        return method.apply(obj, args); // <5>
      };
    }
  }
};

const logger = m => console.log(`${m} was called`); // <6>
const toBeIntercepted = { // <7>
  name: 'Jonathan',
  getName() {
    return this.name;
  },
  setName(name) {
    this.name = name;
  },
};

intercept(toBeIntercepted, logger); // <8>

// prints 'getName was called' followed by 'Jonathan'
console.log(toBeIntercepted.getName());
// prints 'setName was called'
toBeIntercepted.setName('Johnson');
// prints 'getName was called' followed by 'Johnson'
console.log(toBeIntercepted.getName());
// end::020-intercept-method[]
export default intercept;
