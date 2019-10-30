/* eslint-disable no-unused-vars */
import { expect } from 'chai';

import result from '../../src/chapter14/055-sync-async-conditional-again';

describe('chapter14', () => {
  describe('055-sync-async-conditional-again', () => {
    it('should define all the objects', () => {
      expect(result).not.to.be.undefined;
    });

    it('should correctly define all the properties', async () => {
      const r = await result;
      expect(r).to.be.equal(40);
    });
  });
});
