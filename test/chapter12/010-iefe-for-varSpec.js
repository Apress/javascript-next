import { expect } from 'chai';

import counter from '../../src/chapter12/010-iefe-for-var';


describe('chapter12', () => {
  describe('010-iefe-for-var', () => {
    it('should return a counter', () => {
      expect(counter).to.exist;
    });

    it('should have 0 steps', () => {
      expect(counter.getCount()).to.equal(1);
    });

    it('should have increment steps', () => {
      counter.increment();
      expect(counter.getCount()).to.equal(2);
    });
  });
});
