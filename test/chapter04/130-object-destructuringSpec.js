import {
  expect,
} from 'chai';

import * as obj from '../../src/chapter04/130-object-destructuring';

describe('130-object-destructuring', () => {
  it('should define all variables', () => {
    expect(obj.paip).to.be.a('object');
    expect(obj.n).to.be.a('string');
    expect(obj.id).to.be.a('number');
    expect(obj.name).to.be.a('string');
    expect(obj.isbn).to.be.a('number');
  });

  it('should set the right values', () => {
    // 239, 15, 255, 0.9
    expect(obj.n).to.be.equal(obj.paip.name);
    expect(obj.id).to.be.equal(obj.paip.isbn);
    expect(obj.name).to.be.equal(obj.paip.name);
    expect(obj.isbn).to.be.equal(obj.paip.isbn);
  });
});
