/* eslint-disable no-console */
/* eslint-disable consistent-return */
// tag::recursive-json[]
let weakSet = new WeakSet();
const replacer = (key, value) => {
  if (typeof value === 'object' && value !== null) {
    if (weakSet.has(value)) {
      // Circular reference found, discard key
      return; // <1>
    }
    // Store value in our collection
    weakSet.add(value);
  }
  return value;
}; // <2>

const rootObj = {
  name: 'rootObj',
};

rootObj.children = [{
  parent: rootObj,
  name: 'childOne',
  children: [],
}, {
  parent: rootObj,
  name: 'childTwo',
  children: [],
}]; // <3>

// console.log(JSON.stringify(rootObj)); // <4>
console.log(JSON.stringify(rootObj, replacer, 2)); // <5>
// prints
// {
//   "name": "rootObj",
//   "children": [
//     {
//       "name": "childOne",
//       "children": []
//     },
//     {
//       "name": "childTwo",
//       "children": []
//     }
//   ]
// }
// end::recursive-json[]

// we have to reset the weakSet
// otherwise it remains populated (we will have a reference)
// to rootObj, and that causes the replacer to return
// undefined for all, causing the tests to fail
weakSet = new WeakSet();
export {
  rootObj,
  replacer,
};
