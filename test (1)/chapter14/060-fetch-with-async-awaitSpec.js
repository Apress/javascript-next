/* eslint-disable no-unused-vars */
import { expect } from 'chai';

import {
  getWithPromises,
  getWithAsyncAwait,
} from '../../src/chapter14/060-fetch-with-async-await';

describe('chapter14', () => {
  describe('060-fetch-with-async-await', () => {
    it('should define all the objects', () => {
      expect(getWithPromises).not.to.be.undefined;
      expect(getWithAsyncAwait).not.to.be.undefined;
    });

    it('should correctly define all the properties', () => {
      const url = 'https://my-json-server.typicode.com/typicode/demo/posts';

      getWithPromises(url)
        .then((json) => {
          expect(json).to.be.a('array');
        });

      getWithAsyncAwait(url)
        .then((json) => {
          expect(json).to.be.a('array');
        });
    });
  });
});
