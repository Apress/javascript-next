/* eslint-disable no-restricted-syntax */
import {
  expect,
} from 'chai';

import promiseList from '../../src/chapter15/080-for-await-of-sync-iterable';

describe('chapter15', () => {
  describe('080-for-await-of-sync-iterable', () => {
    it('should define all the objects', () => {
      expect(promiseList).to.be.a('array');
    });

    it('should define the properties correctly', async () => {
      for await (const p of promiseList) {
        expect(p).to.be.a('string');
      }
    });
  });
});
