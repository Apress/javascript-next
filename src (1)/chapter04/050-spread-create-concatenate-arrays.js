/* eslint-disable no-console */
const createAndConcatenate = () => {
  // tag::spread-create-concatenate-arrays[]
  const one = [12, -3, 15];
  const otherOne = [...one]; // <1>
  const two = [44, 15, 36]; // <2>

  // mutation
  one.push(...two); // <3>
  // prints '[ 12, -3, 15, 44, 15, 36 ]'
  console.log(one);

  // alternatively inline the concatenation
  const concatenated = [12, -3, 15, ...two]; // <4>
  // prints '[ 12, -3, 15, 44, 15, 36 ]'
  console.log(concatenated);

  // create a new array
  const newArr = [...otherOne, ...two]; // <5>
  // prints '[ 12, -3, 15, 44, 15, 36 ]'
  console.log(newArr);

  // end::spread-create-concatenate-arrays[]
  return [one, concatenated, newArr];
};
export default createAndConcatenate;
