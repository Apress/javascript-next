import {
  expect,
} from 'chai';

import {
  onlyRest,
  restAndSpread,
} from '../../src/chapter04/060-spread-rest-together';

describe('060-spread-rest-together', () => {

  it('should define all the functions', () => {
    expect(onlyRest).to.be.a('function');
    expect(restAndSpread).to.be.a('function');
  });

  it('onlyRest should return an array of arrays', () => {
    const ret = onlyRest('Venkat', 'Raju', 'Daniel', 'Jonathan');
    expect(ret).to.eql(['Venkat', ['Daniel', 'Jonathan', 'Raju']]);
  });

  it('restAndSpread should return an array of arrays', () => {
    const ret = restAndSpread('Venkat', 'Raju', 'Daniel', 'Jonathan');
    expect(ret).to.eql(['Venkat', 'Daniel', 'Jonathan', 'Raju']);
  });
});
