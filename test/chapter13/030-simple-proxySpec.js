import { expect } from 'chai';

import {
  toBeIntercepted,
  proxied,
} from '../../src/chapter13/030-simple-proxy';

describe('chapter13', () => {
  describe('030-simple-proxy', () => {
    it('should define all the objects', () => {
      expect(toBeIntercepted).not.to.be.undefined;
      expect(proxied).not.to.be.undefined;
    });
  });
});
