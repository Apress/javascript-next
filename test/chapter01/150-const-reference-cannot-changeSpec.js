/* eslint-disable prefer-destructuring */
import {
  expect,
} from 'chai';

import {
  VALUE_REFERENCE,
  ARRAY_REFERENCE,
} from '../../src/chapter01/150-const-reference-cannot-change';

describe('const references', () => {
  describe('VALUE_REFERENCE', () => {
    it('should export it', () => {
      expect(VALUE_REFERENCE).to.exist;
    });
  });

  describe('ARRAY_REFERENCE', () => {
    it('should export it', () => {
      expect(ARRAY_REFERENCE).not.to.be.empty;
    });

    it('should allow mutation', () => {
      const length = ARRAY_REFERENCE.length;
      ARRAY_REFERENCE.push('!');
      expect(ARRAY_REFERENCE.length).to.equal(length + 1);
    });
  });
});
