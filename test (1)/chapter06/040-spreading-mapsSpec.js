import {
  expect,
} from 'chai';

import firstQuarter from '../../src/chapter06/040-spreading-maps';

describe('chapter06', () => {
  describe('040-spreading-maps', () => {
    it('should define all the objects', () => {
      expect(firstQuarter).to.be.a('map');
    });

    it('should be spreadable', () => {
      const toStr = [...firstQuarter].join(':');
      expect(toStr).to.be.equal('1,Jan:2,Feb:3,Mar:4,Apr');
    });

    it('should be destructurable', () => {
      const [, , , [n, m]] = firstQuarter;
      expect(n).to.be.equal(4);
      expect(m).to.be.equal('Apr');
    });
  });
});
