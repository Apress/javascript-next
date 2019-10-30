import { expect } from 'chai';

import {
  comparableArray,
  first,
  second,
  third,
} from '../../src/chapter13/050-array-prototype-equals-using-proxy';

describe('chapter13', () => {
  after(() => Reflect.deleteProperty(Array.prototype, 'equals'));

  describe('050-array-prototype-equals-using-proxy', () => {
    it('should define all the objects', () => {
      expect(comparableArray).not.to.be.undefined;
      expect(comparableArray).to.be.a('function');
    });

    it('should correctly define all the properties', () => {
      expect(first.equals(second)).to.be.true;
      expect(first.equals(third)).to.be.false;
    });

    it('should correctly not change array behavior in any way', () => {
      const f = comparableArray([1, 2, 3]);
      f.push(4);
      expect(f).to.be.eql([1, 2, 3, 4]);
      f.shift();
      expect(f).to.be.eql([2, 3, 4]);
      f.pop();
      expect(f).to.be.eql([2, 3]);
      expect(f[0]).to.be.equal(2);
      expect(f.length).to.be.equal(2);
    });
  });
});
