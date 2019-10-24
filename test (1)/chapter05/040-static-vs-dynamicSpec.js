import { expect } from 'chai';

import {
  msg,
  greeting,
  name,
  fixedStrings,
  values,
} from '../../src/chapter05/040-static-vs-dynamic';

describe('chapter05', () => {
  describe('040-static-vs-dynamic', () => {
    it('should define all the objects', () => {
      expect(msg).not.to.be.undefined;
      expect(fixedStrings).not.to.be.undefined;
      expect(values).not.to.be.undefined;
    });

    it('should correctly fixed and dynamic parts', () => {
      const handler = (strings, ...v) => {
        expect(fixedStrings).to.eql(strings);
        expect(values).to.eql(v);
      };

      handler`${greeting}! My name is ${name}!`;
    });
  });
});
