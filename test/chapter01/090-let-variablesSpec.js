import { expect } from 'chai';

import letFunction from '../../src/chapter01/090-let-variables';

describe('letFunction', () => {
  it('should not throw an error', () => {
    expect(letFunction).not.to.throw();
  });
});
