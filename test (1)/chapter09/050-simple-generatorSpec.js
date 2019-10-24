import {
  expect,
} from 'chai';

import {
  generatorDemo,
} from '../../src/chapter09/050-simple-generator';

describe('chapter09', () => {
  describe('050-simple-generator', () => {
    it('should define all the objects', () => {
      expect(generatorDemo()[Symbol.iterator]).not.to.be.undefined;
    });
  });
});
