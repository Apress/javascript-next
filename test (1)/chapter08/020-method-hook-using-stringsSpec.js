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
} from '../../src/chapter08/020-method-hook-using-strings';

describe('chapter08', () => {
  describe('020-method-hook-using-strings', () => {
    it('should define all the objects', () => {
      expect(LOG_LEVEL).to.be.a('string');
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
