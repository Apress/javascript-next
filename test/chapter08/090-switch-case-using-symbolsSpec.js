import {
  expect,
} from 'chai';

import {
  LOG_LEVEL,
  DEBUG,
  INFO,
  ERROR,
  simpleLogger,
  loggableObj,
} from '../../src/chapter08/090-switch-case-using-symbols';

describe('chapter08', () => {
  describe('090-switch-case-using-symbols', () => {
    it('should define all the objects', () => {
      expect(LOG_LEVEL).to.be.a('symbol');
      expect(DEBUG).to.be.a('symbol');
      expect(INFO).to.be.a('symbol');
      expect(ERROR).to.be.a('symbol');
      expect(simpleLogger).to.be.a('function');
      expect(loggableObj).to.be.a('object');
    });

    it('should define the behavior correctly', () => {
      expect(loggableObj[LOG_LEVEL]).to.be.equal(ERROR);

      const otherObj = {
        [LOG_LEVEL]: ERROR,
      };

      expect(simpleLogger(otherObj, 'some message')).to.be.equal('ERROR: some message');
    });
  });
});
