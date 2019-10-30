/* eslint-disable no-console */
/* eslint-disable prefer-template, guard-for-in, no-restricted-syntax */
/* eslint-disable space-in-parens, spaced-comment, prefer-rest-params */

// tag::multi-arity[]
const sayHello = name => 'Hello ' + name;

const buildUrl = (site, protocol) => protocol + '://' + site;

function add( /**args*/ ) { // <1>
  let result = 0;
  for (const i in arguments) {
    result += arguments[i];
  }
  return result;
}

console.assert(sayHello.length === 1);
console.assert(buildUrl.length === 2);
console.assert(add.length === 0);

// prints 'Hello undefined'
console.log(sayHello()); // <2>
// prints 'https://jsrocks.com'
console.log(buildUrl('jsrocks.com', 'https', 'non-required argument')); // <3>
// prints 42
console.log(add(12, 22, 8)); // <4>
// end::multi-arity[]
export {
  add,
  sayHello,
  buildUrl,
};
