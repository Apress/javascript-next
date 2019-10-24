import {
  expect,
} from 'chai';

import and from '../../src/chapter02/150-make-and-using-arrow-functions';

describe('and', () => {
  let gt10;
  let even;
  let evenAndGt10;

  beforeEach(() => {
    gt10 = n => n > 10;
    even = n => n % 2 === 0;
    evenAndGt10 = and(gt10, even);
  });

  it('should be an object', () => {
    expect(and).to.be.a('function');
  });

  it('should define a new function', () => {
    expect(evenAndGt10).to.be.a('function');
  });

  it('should apply and predicates', () => {
    expect(evenAndGt10(15)).to.equal(false);
    expect(evenAndGt10(22)).to.equal(true);
    expect(evenAndGt10(2)).to.equal(false);
  });
});
