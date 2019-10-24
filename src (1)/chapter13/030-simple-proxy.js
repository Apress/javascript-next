/* eslint-disable no-console */
// tag::030-simple-proxy[]
const toBeIntercepted = { // <1>
  name: 'Jonathan',
  getName() {
    return this.name;
  },
  setName(name) {
    this.name = name;
  },
};

const proxied = new Proxy(toBeIntercepted, // <2>
  { // <3>
    get(target, property) { // <4>
      console.log(`${property} was called`);
      return target[property];
    },
  });

// prints 'name was called', followed by 'Jonathan'
console.log(proxied.name); // <5>
// prints 'getName was called', followed by 'Jonathan'
console.log(proxied.getName());
// end::030-simple-proxy[]
export {
  toBeIntercepted,
  proxied,
};
