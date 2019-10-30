import {
  expect,
} from 'chai';

import printIt from '../../src/chapter04/040-spread-console-log';

describe('040-spread-console-log', () => {
  it('should define all the functions', () => {
    expect(printIt).to.be.a('function');
  });

  it('printIt to console should print as expected', () => {
    const [arr, str] = printIt();
    expect(arr).to.be.eql([12, -3, 15, 44, 15, 36]);
    expect(str).to.be.equal('12 -3 15 44 15 36');
  });
});
