/* eslint-disable no-restricted-syntax, no-console */
// tag::040-intercept-method-calls[]
const intercept = (obj, interceptionFn) => { // <1>
  const handler = { // <2>
    get(target, property) {
      if ((Reflect.has(target, property))
        && (target[property] instanceof Function)) { // <3>
        interceptionFn.call(target, property); // <4>
      }
      return Reflect.get(target, property); // <5>
    },
  };
  return new Proxy(obj, handler); // <6>
};

const logger = m => console.log(`${m} was called`); // <7>
const toBeIntercepted = { // <8>
  name: 'Jonathan',
  getName() {
    return this.name;
  },
  setName(name) {
    this.name = name;
  },
};
const proxied = intercept(toBeIntercepted, logger); // <9>

// prints 'getName was called' followed by 'Jonathan'
console.log(proxied.getName());
// prints 'setName was called'
proxied.setName('Johnson');
// prints 'getName was called' followed by 'Johnson'
console.log(proxied.getName());
// end::040-intercept-method-calls[]
export default intercept;
