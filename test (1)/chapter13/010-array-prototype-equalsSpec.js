/* eslint-disable no-unused-vars */
import { expect } from 'chai';

import first from '../../src/chapter13/010-array-prototype-equals';

describe('chapter13', () => {
  after(() => Reflect.deleteProperty(Array.prototype, 'equals'));

  describe('010-array-prototype-equals', () => {
    it('should define all the objects', () => {
      expect(Array.prototype.equals).not.to.be.undefined;
      expect(Array.prototype.equals).to.be.a('function');
    });

    it('should correctly define all the properties', () => {
      expect([1, 2, 3, [4, 5]].equals([1, 2, 3, [4, 5]])).to.be.true;
      expect([1, 2, 3, [4, 5]].equals([1, 2, 3])).to.be.false;
    });
  });
});
