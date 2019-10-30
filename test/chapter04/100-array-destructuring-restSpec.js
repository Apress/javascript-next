import {
  expect,
} from 'chai';

import {
  movies,
  first,
  rest,
  head,
  tail,
} from '../../src/chapter04/100-array-destructuring-rest';

describe('100-array-destructuring-rest', () => {
  it('should define all variables', () => {
    expect(movies).to.be.a('array');
    expect(first).to.be.a('string');
    expect(rest).to.be.a('array');
    expect(head).to.be.a('string');
    expect(tail).to.be.a('array');
  });

  it('should the right thing', () => {
    expect(movies).to.be.eql(['Momento', 'Batman Begins', 'The Dark Knight']);
    expect(first).to.be.equal('Momento');
    expect(rest).to.be.eql(['Batman Begins', 'The Dark Knight']);
    expect(head).to.be.equal('Batman Begins');
    expect(tail).to.be.eql(['The Dark Knight']);
  });
});
