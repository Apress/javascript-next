import { expect } from 'chai';

import msg from '../../src/chapter05/020-nested-interpolation';

describe('chapter05', () => {
  xdescribe('020-nested-interpolation', () => {
    it('should define all the objects', () => {
      expect(msg).not.to.be.undefined;
    });

    it('should correctly define the message', () => {
      expect(msg).to.be.equal('Hola! My name is Daniel');
    });
  });
});
