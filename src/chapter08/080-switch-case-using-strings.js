/* eslint-disable no-console */

// tag::switch-case-using-strings[]
const LOG_LEVEL = Symbol('log');
const DEBUG = 'DEBUG'; // <1>
const INFO = 'INFO';
const ERROR = 'ERROR';

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

const MY_LEVEL = 'ERROR'; // <3>
const loggableObj = {
  log: 'this is just an ordinary property',
  [LOG_LEVEL]: MY_LEVEL, // <4>
};

// prints 'ERROR: this is a test'
simpleLogger(loggableObj, 'this is a test'); // <5>
// end::switch-case-using-strings[]
export {
  LOG_LEVEL,
  DEBUG,
  INFO,
  ERROR,
  MY_LEVEL,
  simpleLogger,
  loggableObj,
};
