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
} from '../../src/chapter08/070-method-hook-using-symbols';

describe('chapter08', () => {
  describe('070-method-hook-using-symbols', () => {
    it('should define all the objects', () => {
      expect(LOG_LEVEL).to.be.a('symbol');
      expect(DEBUG).to.be.a('string');
      expect(INFO).to.be.a('string');
      expect(ERROR).to.be.a('string');
      expect(simpleLogger).to.be.a('function');
      expect(loggableObj).to.be.a('object');
    });

    it('should define the behavior correctly', () => {
      expect(loggableObj[LOG_LEVEL]).to.be.equal(INFO);

      const otherObj = {
        [LOG_LEVEL]: ERROR,
      };

      expect(simpleLogger(otherObj, 'some message')).to.be.equal('ERROR: some message');
    });
  });
});
