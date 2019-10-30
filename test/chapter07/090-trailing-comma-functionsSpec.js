import {
  expect,
} from 'chai';

import rate from '../../src/chapter07/090-trailing-comma-functions';

describe('chapter07', () => {
  describe('090-trailing-comma-functions', () => {
    it('should define all the objects', () => {
      expect(rate).to.be.a('function');
    });

    it('should correctly initialize the object', () => {
      expect(rate('bla', 4)).to.be.equal('You rated \'bla\' 4 stars');
    });
  });
});
