/* eslint-disable no-case-declarations, no-redeclare, no-undef, no-unused-vars, semi */
// tag::let-and-switch[]
function determineFavoriteDrink(profession) {
  switch (profession) {
    case 'Programmer':
      let drink = 'coffee'; // <1>
      break
    case 'Yoga instructor':
      let drink = 'tea'; // <2>
      break;
    default:
      let drink = 'water'; // <3>
      break;
  }
  return drink;
}
// results in 'SyntaxError'
console.log(determineFavoriteDrink('Programmer'));
// end::let-and-switch[]
