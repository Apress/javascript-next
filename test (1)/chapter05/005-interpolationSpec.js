import { expect } from 'chai';

import fullName from '../../src/chapter05/005-interpolation';

describe('chapter05', () => {
  describe('005-interpolation', () => {
    it('should define all the objects', () => {
      expect(fullName).not.to.be.undefined;
    });

    it('should correctly define the message', () => {
      expect(fullName).to.be.equal('Mr. Edgar Allen Poe');
    });
  });
});
