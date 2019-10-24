import {
  expect,
} from 'chai';

import {
  fibonacci,
} from '../../src/chapter09/020-es5-fibonacci';

describe('chapter09', () => {
  describe('020-es5-fibonacci', () => {
    it('should define all the objects', () => {
      expect(fibonacci).to.be.a('function');
    });

    it('should define the properties correctly', () => {
      expect(fibonacci(0)).to.be.eql([]);
      expect(fibonacci(1)).to.be.eql([0]);
      expect(fibonacci(2)).to.be.eql([0, 1]);
      expect(fibonacci(10)).to.be.eql([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
  });
});
