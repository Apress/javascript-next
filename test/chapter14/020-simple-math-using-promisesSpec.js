/* eslint-disable no-unused-vars */
import { expect } from 'chai';

import {
  firstAsyncOp,
  secondAsyncOp,
  thirdAsyncOp,
  result,
} from '../../src/chapter14/020-simple-math-using-promises';

describe('chapter14', () => {
  describe('020-simple-math-using-promises', () => {
    it('should define all the objects', () => {
      expect(firstAsyncOp).not.to.be.undefined;
      expect(secondAsyncOp).not.to.be.undefined;
      expect(thirdAsyncOp).not.to.be.undefined;
      expect(result).not.to.be.undefined;
    });

    it('should correctly define all the properties', async () => {
      const f = await firstAsyncOp();
      expect(f).to.be.equal(10);

      const s = await secondAsyncOp(10);
      expect(s).to.be.equal(30);

      const t = await thirdAsyncOp(10);
      expect(t).to.be.equal(40);

      const r = await result;
      expect(r).to.be.equal(60);
    });
  });
});
