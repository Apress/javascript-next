/* eslint-disable no-console */

// tag::switch-case-using-symbols[]
const LOG_LEVEL = Symbol('log');
const DEBUG = Symbol('DEBUG'); // <1>
const INFO = Symbol('INFO');
const ERROR = Symbol('ERROR');

const simpleLogger = (obj, msg) => {
  let returnMsg;
  switch (obj[LOG_LEVEL]) { // <2>
    case DEBUG:
      returnMsg = `DEBUG: ${msg}`;
      break;
    case INFO:
      returnMsg = `INFO: ${msg}`;
      break;
    case ERROR:
      returnMsg = `ERROR: ${msg}`;
      break;
    default:
      throw new Error('Invalid LOG_LEVEL');
  }
  console.log(returnMsg);
  return returnMsg;
};

const loggableObj = {
  log: 'this is just an ordinary property',
  [LOG_LEVEL]: ERROR,
};

// prints 'ERROR: this is a test'
simpleLogger(loggableObj, 'this is a test'); // <3>
// end::switch-case-using-symbols[]
export {
  LOG_LEVEL,
  DEBUG,
  INFO,
  ERROR,
  simpleLogger,
  loggableObj,
};
