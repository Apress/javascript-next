import {
  expect,
} from 'chai';

import perimeter from '../../src/chapter04/090-array-destructuring-function-parameter';

describe('090-array-destructuring-function-parameter', () => {
  it('should define all functions', () => {
    expect(perimeter).to.be.a('function');
  });

  it('should calculate perimeter correctly', () => {
    expect(perimeter()).to.be.equal(40);
    expect(perimeter([])).to.be.equal(40);
    expect(perimeter([15])).to.be.equal(60);
  });
});
