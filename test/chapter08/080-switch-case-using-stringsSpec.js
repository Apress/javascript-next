import {
  expect,
} from 'chai';

import {
  LOG_LEVEL,
  DEBUG,
  INFO,
  ERROR,
  MY_LEVEL,
  simpleLogger,
  loggableObj,
} from '../../src/chapter08/080-switch-case-using-strings';

describe('chapter08', () => {
  describe('080-switch-case-using-strings', () => {
    it('should define all the objects', () => {
      expect(LOG_LEVEL).to.be.a('symbol');
      expect(DEBUG).to.be.a('string');
      expect(INFO).to.be.a('string');
      expect(ERROR).to.be.a('string');
      expect(simpleLogger).to.be.a('function');
      expect(loggableObj).to.be.a('object');
    });

    it('should define the behavior correctly', () => {
      expect(loggableObj[LOG_LEVEL]).to.be.equal(MY_LEVEL);

      const otherObj = {
        [LOG_LEVEL]: ERROR,
      };

      expect(simpleLogger(otherObj, 'some message')).to.be.equal('ERROR: some message');
    });
  });
});
