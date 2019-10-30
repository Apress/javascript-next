import {
  expect,
} from 'chai';

import createAndConcatenate from '../../src/chapter04/050-spread-create-concatenate-arrays';

describe('050-spread-create-concatenate-arrays', () => {
  it('should define all the functions', () => {
    expect(createAndConcatenate).to.be.a('function');
  });

  it('createAndConcatenate should do the right thing', () => {
    const [one, two, three] = createAndConcatenate();
    expect(one).to.be.eql([12, -3, 15, 44, 15, 36]);
    expect(two).to.be.eql([12, -3, 15, 44, 15, 36]);
    expect(three).to.be.eql([12, -3, 15, 44, 15, 36]);
  });
});
