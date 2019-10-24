/* eslint-disable no-restricted-syntax, no-console */
const jsonToXmlBuilder = () => {
  // tag::080-xml-builder-1[]
  const ele = function(target) { // <1>
    return function (attrs = {}, text = '') {
      for(const [k, v] of Object.entries(attrs)) {
        target[`@${k}`] = v; // <2>
      }
      if(text) target['#text'] = text; // <3>
      // this will be in scope
      return proxy;
    }
  }
  // end::080-xml-builder-1[]
  // tag::080-xml-builder-2[]
  // 'elements' is a stack of previously constructed elements,
  // initialized with an empty object (the root)
  // Every time we encounter a new element, we put it at the
  // top of the stack.
  // Every time we encounter an 'up()', we drop the top-most entry
  const handler = {
    get(target, property) {
      if (property === 'end') {
        return () => JSON.stringify(elements.pop()); // <1>
      }
      if (property === 'up') {
        elements.shift(); // <2>
        return () => proxy; // <3>
      }
      const [curParent] = elements; // <4>
      const child = {};
      elements.unshift(child); // <5>
      if(curParent[property]) { // <6>
        const existing = curParent[property];
        if(Array.isArray(existing)) {
          curParent[property] = [...existing, child];
        } else {
          curParent[property] = [existing, child];
        }
      } else {
        curParent[property] = child;
      }
      return ele(child); // <7>
    },
  };

  // end::080-xml-builder-2[]
  const root = {};
  const elements = [root];
  const proxy = new Proxy(root, handler);

  return proxy;
};


/*
// tag::080-xml-builder-3[]
const jsonToXmlBuilder = () => {
  // truncated for brevity
  // const ele = function(target) { get(target, property) { ... } }
  // const handler = { ... }
  const root = {};
  const elements = [root];
  const proxy = new Proxy(root, handler);
  return proxy;
};
// end::080-xml-builder-3[]
*/

// tag::080-xml-builder-4[]
const books = jsonToXmlBuilder()
                .books({ count: '2' })
                  .book({ id: '1' })
                    .title({ isbn: '1590592395' }, 'Practical Common Lisp')
                    .up()
                  .up()
                  .book({ id: '2' })
                    .title({ isbn: '9780133708752' }, 'ANSI Common LISP')
                    .up()
                  .up()
                  .subject({}, "Lisp")
                  .up()
                .end();
console.log(books);
// prints
// {
//   "books": {
//     "@count": "2",
//     "book": [{
//       "@id": "1",
//       "title": {
//         "@isbn": "1590592395",
//         "#text": "Practical Common Lisp"
//       }
//     }, {
//       "@id": "2",
//       "title": {
//         "@isbn": "9780133708752",
//         "#text": "ANSI Common LISP"
//       }
//     }],
//     "subject": {
//       "#text": "Lisp"
//     }
//   }
// }

// paste the output in https://www.freeformatter.com/json-to-xml-converter.html
// and you can verify the generated XML
// end::080-xml-builder-4[]
export default jsonToXmlBuilder;
