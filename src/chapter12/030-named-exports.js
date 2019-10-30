/* eslint-disable no-restricted-properties, no-var, block-scoped-var, vars-on-top */
/* eslint-disable vars-on-top */
// THIS FILE IS BEING IMPORTED BY 060-named-imports!!!
// tag::030-named-exports[]
const degreesToRadians = d => d * (Math.PI / 180); // <1>
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

export { // <2>
  degreesToRadians,
  gradiansToRadians,
  sin,
  cos,
  tan,
  trig,
};
// end::030-named-exports[]
