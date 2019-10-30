/* eslint-disable no-restricted-properties */
// THIS FILE IS USED BY 090-default-import.js!!
const degreesToRadians = d => d * (Math.PI / 180);
const gradiansToRadians = g => g * 15.707 * Math.pow(10, -3);

const calc = (fn, x, unit) => {
  switch (unit) {
    case 'degrees':
      return fn.call(null, degreesToRadians(x));
    case 'gradians':
      return fn.call(null, gradiansToRadians(x));
    default:
      return fn.call(null, x);
  }
};

const sin = (x, unit = 'degrees') => calc(Math.sin, x, unit);
const cos = (x, unit = 'degrees') => calc(Math.cos, x, unit);
const tan = (x, unit = 'degrees') => calc(Math.tan, x, unit);

const trig = {
  degreesToRadians,
  gradiansToRadians,
  sin,
  cos,
  tan,
};

// tag::040-default-exports[]
export { // <1>
  degreesToRadians,
  gradiansToRadians,
  sin,
  cos,
  tan, // <2>
};

export default trig; // <3>
// end::040-default-exports[]
