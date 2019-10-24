import {
  expect,
} from 'chai';

import p from '../../src/chapter10/010-basic-promise';

describe('chapter10', () => {
  describe('010-basic-promise', () => {
    it('should define all the objects', () => {
      expect(p).not.to.be.undefined;
    });

    it('should define the properties correctly', () => {
      p.then((msg) => {
        expect(msg).to.be.equal('I transitioned successfully');
      });
    });
  });
});
