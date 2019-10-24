import {
  expect,
} from 'chai';

import {
  noop,
  identity,
  get,
} from '../../src/chapter02/050-arrow-parameters';

describe('arrow params', () => {
  it('should return define all the functions', () => {
    expect(noop).to.be.a('function');
    expect(identity).to.be.a('function');
    expect(get).to.be.a('function');
  });

  it('should do what we expect', () => {
    expect(noop()).not.be.ok;
    expect(identity(16)).to.be.equal(16);
    expect(get({
      name: 'raju',
    }, 'name')).to.be.equal('raju');
  });
});
