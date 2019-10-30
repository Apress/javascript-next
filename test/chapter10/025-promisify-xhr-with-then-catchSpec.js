import {
  expect,
} from 'chai';
import mock from 'xhr-mock';

import asyncRequest from '../../src/chapter10/025-promisify-xhr-with-then-catch';

describe('chapter10', () => {
  describe('025-promisify-xhr-with-then-catch', () => {

    beforeEach(() => mock.setup());

    // put the real XHR object back and clear the mocks after each test
    afterEach(() => mock.teardown());

    it('should successfully GET', async () => {
      // expect.assertions(2);

      mock.get('/', {
        headers: { 'Content-Length': '12' },
        body: 'Hello World!',
      });

      const a = await asyncRequest('GET', '/');
      expect(a).to.be.equal('Hello World!');
    });
  });
});
