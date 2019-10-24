import {
  expect,
} from 'chai';

import {
  q1,
  q2,
  q3,
  q4,
  sq1,
  sq2,
  sq3,
  sq4,
} from '../../src/chapter04/080-array-destructuring-defaults';

describe('080-array-destructuring-defaults', () => {
  it('should define all variables', () => {
    expect(q1).to.be.a('number');
    expect(q2).to.be.a('number');
    expect(q3).to.be.a('number');
    expect(q4).to.be.a('number');
    expect(sq1).to.be.a('number');
    expect(sq2).to.be.a('number');
    expect(sq3).to.be.a('number');
    expect(sq4).to.be.a('number');
  });

  it('should set the right values for the quadrilateral', () => {
    // [10, 15, 10, 15]
    expect(q1).to.be.equal(10);
    expect(q2).to.be.equal(15);
    expect(q3).to.be.equal(q1);
    expect(q4).to.be.equal(q2);
  });

  it('should set the right values for the square', () => {
    // [10, 15, 10, 15]
    expect(sq1).to.be.equal(10);
    expect(sq2).to.be.equal(sq1);
    expect(sq3).to.be.equal(sq1);
    expect(sq4).to.be.equal(sq1);
  });
});
