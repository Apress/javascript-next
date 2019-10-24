import {
  expect,
} from 'chai';

import rachael from '../../src/chapter04/068-object-assign';

describe('chapter06', () => {
  describe('068-object-assign', () => {
    it('should define all the objects', () => {
      expect(rachael).to.be.a('object');
    });

    it('should greet the invokee', () => {
      expect(rachael.name).to.be.equal('Rachael');
      expect(rachael.hobby).to.be.equal('Gardening');
      expect(rachael.profession).to.be.equal('Auditor');
    });
  });
});
