/* eslint-disable no-console */
// tag::method-hook-using-symbols[]
const LOG_LEVEL = Symbol('log'); // <1>
const DEBUG = 'DEBUG';
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

const loggableObj = {
  log: 'this is just an ordinary property',
  [LOG_LEVEL]: INFO, // <3>
};

simpleLogger(loggableObj, 'this is a test'); // <4>

// end::method-hook-using-symbols[]
export {
  LOG_LEVEL,
  DEBUG,
  INFO,
  ERROR,
  simpleLogger,
  loggableObj,
};
