import { expect } from 'chai';

import intercept from '../../src/chapter13/040-intercept-method-calls';

describe('chapter13', () => {
  describe('040-intercept-method-calls', () => {
    it('should define all the objects', () => {
      expect(intercept).not.to.be.undefined;
      expect(intercept).to.be.a('function');
    });

    it('should correctly define all the properties', () => {
      const obj = {
        name: 'Raju',
        getFirstName() { return this.name; },
      };
      let method;
      const checker = (m) => {
        method = m;
      };
      const proxy = intercept(obj, checker);
      const returnValue = proxy.getFirstName();
      expect(method).to.be.equal('getFirstName');
      expect(returnValue).to.be.equal('Raju');
      obj.name = 'Venkat';
      // shouldn't invoke the intercepter
      expect(method).to.be.equal('getFirstName');
      expect(obj.name).to.be.equal('Venkat');
    });
  });
});
