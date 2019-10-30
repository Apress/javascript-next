/* eslint-disable no-unused-vars */
import {
  expect,
} from 'chai';

import {
  PersonAsRegularFunction,
  PersonAsArrowFunction,
  regularFunction,
  arrowFunction,
} from '../../src/chapter02/125-arrow-functions-as-constructors-no-arguments';

describe('125-arrow-functions-as-constructors-no-arguments', () => {
  it('should define all the functions', () => {
    expect(PersonAsRegularFunction).to.be.a('function');
    expect(PersonAsArrowFunction).to.be.a('function');
    expect(regularFunction).to.be.a('function');
    expect(arrowFunction).to.be.a('function');
  });

  it('function invocation of regular function as constructor should work', () => {
    expect(new PersonAsRegularFunction('Raju')).not.to.be.undefined;
  });

  it('function invocation of arrow function as constructor should NOT work', () => {
    try {
      const p = new PersonAsRegularFunction('Raju');
      expect(true).to.equal(false); // sanity
    } catch (e) {
      expect(e).not.to.be.undefined;
    }
  });

  it('regular function invocation should return arguments object', () => {
    const ret = regularFunction(10, 'a', true, false);
    expect(ret.length).to.equal(4);
    expect(ret[0]).to.equal(10);
    expect(ret[1]).to.equal('a');
    expect(ret[2]).to.equal(true);
    expect(ret[3]).to.equal(false);
  });
});
