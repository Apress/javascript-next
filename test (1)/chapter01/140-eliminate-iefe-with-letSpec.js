import { expect } from 'chai';

import counter from '../../src/chapter01/140-eliminate-iefe-with-let';

describe('Block-let counter', () => {
  it('should return a counter', () => {
    expect(counter).to.exist;
  });

  it('should have 1 steps', () => {
    expect(counter.getCount()).to.equal(1);
  });

  it('should have increment steps', () => {
    counter.increment();
    // we invoke it once in the actual code, so here we are starting at 1
    expect(counter.getCount()).to.equal(2);
  });
});
