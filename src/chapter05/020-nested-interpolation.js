/* eslint-disable no-console */
// tag::020-nested-interpolation[]
// for illustrative purposes _ marks a whitespace
{
  const name = 'Edgar';
  const middle = 'Allen';
  const last = 'Poe';

  // prints 'Edgar_Allen_Poe'
  console.log(`${name} ${middle} ${last}`); // <1>
}

{
  const name = 'Emily';
  const middle = '';
  const last = 'Dickinson';

  // prints 'Emily__Dickinson'
  console.log(`${name} ${middle} ${last}`);
  // prints 'Emily__Dickinson' // <2>
  console.log(`${name} ${middle.trim()} ${last}`);
  // console.log(`${${name} ${middle}}.trim() ${last}`); // <3>
  // prints Emily_Dickinson
  console.log(`${`${name} ${middle}`.trim()} ${last}`); // <4>
}

// end::020-nested-interpolation[]
// export default msg;
