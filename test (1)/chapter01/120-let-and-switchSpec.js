/* eslint-disable no-eval */

import {
  expect,
} from 'chai';

const fs = require('fs');

describe('createBadFunction', () => {
  it('should return throw an error', (done) => {
    fs.readFile('./src/chapter01/120-let-and-switch.js', (err, data) => {
      if (err) {
        // we expect an error
        expect(true).to.equal(false);
      }
      try {
        eval(data.toString());
        // should never get here
        expect(true).to.equal(false);
        done();
      } catch (e) {
        expect(e.message).to.equal('Identifier \'drink\' has already been declared');
        done();
      }
    });
  });
});
