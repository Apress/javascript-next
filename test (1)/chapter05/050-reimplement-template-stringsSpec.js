import { expect } from 'chai';

import {
  handler,
  greeting,
  name,
  msg,
} from '../../src/chapter05/050-reimplement-template-strings';

describe('chapter05', () => {
  describe('050-reimplement-template-strings', () => {
    it('should define all the objects', () => {
      expect(handler).not.to.be.undefined;
      expect(greeting).not.to.be.undefined;
      expect(name).not.to.be.undefined;
      expect(msg).not.to.be.undefined;
    });

    it('should correctly fixed and dynamic parts', () => {
      const g = 'Hola';
      const n = 'Danno';
      const x = handler`${g}! My name is ${n}!`;
      expect(x).to.be.equal('Hola! My name is Danno!');
    });
  });
});
