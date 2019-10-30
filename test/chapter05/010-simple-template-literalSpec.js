import { expect } from 'chai';

import msg from '../../src/chapter05/010-simple-template-literal';

describe('chapter05', () => {
  describe('010-simple-template-literal', () => {
    it('should define all the objects', () => {
      expect(msg).not.to.be.undefined;
    });

    it('should correctly define the message', () => {
      expect(msg).to.be.equal('Hola! My name is Daniel');
    });
  });
});
