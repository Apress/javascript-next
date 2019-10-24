import {
  expect,
} from 'chai';

import {
  url,
  split,
} from '../../src/chapter08/120-string-match';

describe('chapter08', () => {
  describe('120-string-match', () => {
    it('should define all the objects', () => {
      expect(url).to.be.a('string');
      expect(split).to.be.a('array');
    });

    it('should define the behavior correctly', () => {
      expect(split.length).to.be.equal(1);
    });
  });
});
