/* eslint-disable no-unused-vars */
import { expect } from 'chai';

import {
  implicitPromise,
  explicitPromise,
} from '../../src/chapter14/030-simple-async';

describe('chapter14', () => {
  describe('030-simple-async', () => {
    it('should define all the objects', () => {
      expect(implicitPromise).not.to.be.undefined;
      expect(implicitPromise).to.be.a('function');
      expect(explicitPromise).not.to.be.undefined;
      expect(explicitPromise).to.be.a('function');
    });

    it('should correctly define all the properties', () => {
      implicitPromise().then(val => expect(val).to.be.a('array'));
      explicitPromise().then(val => expect(val).to.be.a('array'));
    });
  });
});
