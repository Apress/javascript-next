import { expect } from 'chai';

import trigFns from '../../src/chapter12/080-wildcard-import'; // <1>


describe('chapter12', () => {
  describe('080-wildcard-import', () => {
    it('should define all the objects', () => {
      expect(trigFns).not.to.be.undefined;
    });
  });
});
