/* eslint-disable no-unused-vars */
import { expect } from 'chai';

import {
  firstAsyncOp,
  secondAsyncOp,
  thirdAsyncOp,
  result,
} from '../../src/chapter14/065-error-trapping';

describe('chapter14', () => {
  describe('065-error-trapping', () => {
    it('should define all the objects', () => {
      expect(firstAsyncOp).not.to.be.undefined;
      expect(secondAsyncOp).not.to.be.undefined;
      expect(thirdAsyncOp).not.to.be.undefined;
      expect(result).not.to.be.undefined;
    });

    it('should correctly define all the properties', async () => {
      const first = await firstAsyncOp();
      expect(first).to.be.equal(10);

      const second = await secondAsyncOp(5);
      expect(second).to.be.equal(25);

      try {
        await thirdAsyncOp(10);
      } catch (e) {
        expect(e).not.to.be.undefined;
      }

      result.then(val => expect(val).to.be.equal(0));
    });
  });
});
