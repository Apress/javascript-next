// tag::040-static-vs-dynamic[]

const greeting = 'Hello';
const name = 'Sylvia';
const msg = `${greeting}! My name is ${name}!`; // <1>
//           ___________-------------_______^  // <2>

const fixedStrings = ['', '! My name is ', '!']; // <3>
const values = ['Hello', 'Sylvia']; // <4>

// end::040-static-vs-dynamic[]
export {
  msg,
  greeting,
  name,
  fixedStrings,
  values,
};
