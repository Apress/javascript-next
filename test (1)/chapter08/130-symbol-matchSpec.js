import {
  expect,
} from 'chai';

import {
  passwordObfuscator,
  credentials,
} from '../../src/chapter08/130-symbol-match';

describe('chapter08', () => {
  describe('130-symbol-match', () => {
    it('should define all the objects', () => {
      expect(passwordObfuscator).to.be.a('object');
      expect(credentials).to.be.a('array');
    });

    it('should define the behavior correctly', () => {
      expect(credentials[0]).to.be.equal('admin:***********');
    });
  });
});
