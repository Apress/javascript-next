/* eslint-disable no-console */
// tag::060-emmet-handler[]
function ele([strings], ...values) { // <1>
  const str = strings.trim();
  // assume anything before the FIRST . or # to be the name of the element
  const [element] = str.split(/[.#]/); // <2>

  // split the remainder of the string into parts using . or # as the delimiter
  // this will grab everything between a '.' or '#' and the next '.' or '#'
  const attrs = str.match(/[.#](?:[^.#]+)/g); // <3>

  let idStr = '';
  let classStr = '';
  if (attrs) { // <4>
    // find all ids supplied
    // if multiple ids were supplied just use the last one
    const id = attrs
      .filter(a => a.startsWith('#'))
      .pop(); // <5>
    // do not compose id string if no ids were supplied
    idStr = id
      ? `id="${id.substring(1, id.length)}"` // <6>
      : '';

    // find all classes supplied
    const classes = attrs
      .filter(a => a.startsWith('.'))
      .map(v => v.substring(1, v.length)); // <7>
    // do not compose class string if no classes were supplied
    classStr = (classes.length > 0)
      ? `class="${classes.reduce((acc, v) => `${acc}${v} `, '').trim()}"` // <8>
      : '';
  }

  const adornedElement = [element, idStr, classStr]
    .reduce((acc, v) => `${acc} ${v}`.trim(), ''); // <9>
  return `<${adornedElement}>${values.join('')}</${element}>`; // <10>
}

const heading = 'Hello Template Handlers';

// prints '<h1>Hello Template Handlers</h1>'
console.log(ele`h1 ${heading}`);
// prints '<h1 id="main">Hello Template Handlers</h1>'
console.log(ele`h1#main ${heading}`);
// prints '<h1 class="title">Hello Template Handlers</h1>'
console.log(ele`h1.title ${heading}`);
// prints '<h1 id="main" class="title content">Hello Template Handlers</h1>'
console.log(ele`h1.title.content#main ${heading}`);
// prints '<h1 id="main" class="title content"><div>Hello Template Handlers</div></h1>'
console.log(ele`h1.title.content#main ${ele`div${heading}`}`);
// prints '<h1 id="main" class="title content"><div class="banner">Hello Template Handlers</div></h1>'
console.log(ele`h1.title.content#main ${ele`div.banner${heading}`}`);
// end::060-emmet-handler[]
export default ele;
