import { expect } from 'chai';

import foo from '../../src/chapter01/110-let-hoisted';

describe('foo', () => {
  it('should not throw an error', () => {
    expect(foo).not.to.throw();
  });
});
