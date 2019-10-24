import { expect } from 'chai';

import escapingLiterals from '../../src/chapter05/030-escaping-literals';

describe('chapter05', () => {
  describe('030-escaping-literals', () => {
    it('should define all the objects', () => {
      expect(escapingLiterals).not.to.be.undefined;
    });

    it('should correctly define the message', () => {
      expect(escapingLiterals).to.be.equal('Template strings introduce `` and use ${} for interpolation');
    });
  });
});
