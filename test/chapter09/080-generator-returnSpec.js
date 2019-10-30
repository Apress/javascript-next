import {
  expect,
} from 'chai';

import {
  generatorFunctionWithTryCatchFinally,
} from '../../src/chapter09/080-generator-return';

describe('chapter09', () => {
  describe('080-generator-return', () => {
    it('should define all the objects', () => {
      expect(generatorFunctionWithTryCatchFinally()[Symbol.iterator]).not.to.be.undefined;
    });
  });
});
