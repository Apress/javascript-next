/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

// tag::method-hook-using-strings[]
const LOG_LEVEL = 'log'; // <1>
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
  [LOG_LEVEL]: INFO, // <3>
};

simpleLogger(loggableObj, 'this is a test');

const someOtherObject = {
  log: 'this is just an ordinary property', // <4>
};

// simpleLogger(someOtherObject, 'some message') // <5>

// end::method-hook-using-strings[]
export {
  LOG_LEVEL,
  DEBUG,
  INFO,
  ERROR,
  simpleLogger,
  loggableObj,
};
