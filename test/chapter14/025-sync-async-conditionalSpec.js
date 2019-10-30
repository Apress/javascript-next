/* eslint-disable no-unused-vars */
import { expect } from 'chai';

import {
  syncConditionalResult,
  asyncConditionalResult,
} from '../../src/chapter14/025-sync-async-conditional';

describe('chapter14', () => {
  describe('025-sync-async-conditional', () => {
    it('should define all the objects', () => {
      expect(syncConditionalResult).not.to.be.undefined;
      expect(asyncConditionalResult).not.to.be.undefined;
    });

    it('should correctly define all the properties', () => {
      expect(syncConditionalResult).to.be.equal(40);
      asyncConditionalResult.then(val => expect(val).to.be.equal(40));
    });
  });
});
