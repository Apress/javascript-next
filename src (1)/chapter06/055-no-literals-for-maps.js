// tag::055-no-literals-for-maps[]
const kiran = { // <1>
  name: 'kiran',
  profession: 'pharmacist',
};

const favFruits = [ // <2>
  'mango',
  'guava',
  'pineapple',
];

const numbersInHindi = new Map(); // <3>
numbersInHindi.set(1, 'ek').set(2, 'do').set(3, 'teen');

// end::055-no-literals-for-maps[]
export {
  kiran,
  favFruits,
  numbersInHindi,
};
