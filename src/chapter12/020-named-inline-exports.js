/* eslint-disable no-restricted-properties */
// tag::020-named-inline-exports[]
export const degreesToRadians = d => d * (Math.PI / 180); // <1>
export const gradiansToRadians = g => g * 15.707 * Math.pow(10, -3);

const calc = (fn, x, unit) => { // <2>
  switch (unit) {
    case 'degrees':
      return fn.call(null, degreesToRadians(x));
    case 'gradians':
      return fn.call(null, gradiansToRadians(x));
    default:
      return fn.call(null, x);
  }
};

export const sin = (x, unit = 'degrees') => calc(Math.sin, x, unit);
export const cos = (x, unit = 'degrees') => calc(Math.cos, x, unit);
export const tan = (x, unit = 'degrees') => calc(Math.tan, x, unit);

export const trig = { // <3>
  degreesToRadians,
  gradiansToRadians,
  sin,
  cos,
  tan,
};
// end::020-named-inline-exports[]
