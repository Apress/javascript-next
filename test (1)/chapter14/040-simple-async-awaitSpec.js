/* eslint-disable no-unused-vars */
import { expect } from 'chai';

import firstAsyncOp from '../../src/chapter14/040-simple-async-await';

describe('chapter14', () => {
  describe('040-simple-async-await', () => {
    it('should define all the objects', () => {
      expect(firstAsyncOp).not.to.be.undefined;
      expect(firstAsyncOp).to.be.a('function');
    });

    it('should correctly define all the properties', async () => {
      const ret = await firstAsyncOp();
      expect(ret).to.be.equal(10);
    });
  });
});
