/* eslint-disable no-unused-vars */
import { expect } from 'chai';

import {
  firstSyncOp,
  secondSyncOp,
  thirdSyncOp,
  result,
} from '../../src/chapter14/010-simple-math-imperatively';

describe('chapter14', () => {
  describe('010-simple-math-imperatively', () => {
    it('should define all the objects', () => {
      expect(firstSyncOp).not.to.be.undefined;
      expect(secondSyncOp).not.to.be.undefined;
      expect(thirdSyncOp).not.to.be.undefined;
      expect(result).not.to.be.undefined;
    });

    it('should correctly define all the properties', () => {
      expect(firstSyncOp()).to.be.equal(10);
      expect(secondSyncOp(10)).to.be.equal(30);
      expect(thirdSyncOp(20)).to.be.equal(50);
      expect(result).to.be.equal(60);
    });
  });
});
