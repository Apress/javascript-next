import {
  expect,
} from 'chai';

import perimeter from '../../src/chapter04/020-perimeter-apply';

describe('020-perimeter-apply', () => {
  it('should define all the functions', () => {
    expect(perimeter).to.be.a('function');
  });

  it('perimeter should do the right thing', () => {
    const p = perimeter(9, 8, 3);
    expect(p).to.be.equal(20);
  });
});
