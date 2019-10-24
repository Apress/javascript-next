/* eslint-disable no-unused-vars */
import { expect } from 'chai';

import {
  firstAsyncOp,
  secondAsyncOp,
  thirdAsyncOp,
  result,
} from '../../src/chapter14/050-simple-math-using-async-await';

describe('chapter14', () => {
  describe('050-simple-math-using-async-await', () => {
    it('should define all the objects', () => {
      expect(firstAsyncOp).not.to.be.undefined;
      expect(secondAsyncOp).not.to.be.undefined;
      expect(thirdAsyncOp).not.to.be.undefined;
      expect(result).not.to.be.undefined;
    });

    it('should correctly define all the properties', () => {
      firstAsyncOp().then(val => expect(val).to.be.equal(10));
      secondAsyncOp(10).then(val => expect(val).to.be.equal(30));
      thirdAsyncOp(10).then(val => expect(val).to.be.equal(40));
      result.then(val => expect(val).to.be.equal(60));
    });
  });
});
