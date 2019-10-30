import {
  expect,
} from 'chai';

import {
  add,
  sayHello,
  buildUrl,
} from '../../src/chapter03/010-function-multi-arity';

describe('010-function-multi-arity', () => {
  it('should define all the functions', () => {
    expect(add).to.be.a('function');
    expect(sayHello).to.be.a('function');
    expect(buildUrl).to.be.a('function');
  });

  it('add should add all the numbers', () => {
    expect(add(5, 4, -1)).to.be.equal(8);
  });

  it('sayHello should greet me', () => {
    expect(sayHello('raju')).to.be.equal('Hello raju');
  });

  it('build url should return a new url', () => {
    expect(buildUrl('www.example.com', 'http'))
      .to.be.equal('http://www.example.com');
  });
});
