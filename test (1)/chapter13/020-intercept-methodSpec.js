import { expect } from 'chai';

import intercept from '../../src/chapter13/020-intercept-method';

describe('chapter13', () => {
  describe('020-intercept-method', () => {
    it('should define all the objects', () => {
      expect(intercept).not.to.be.undefined;
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
      intercept(obj, checker);
      obj.getFirstName();
      expect(method).to.be.equal('getFirstName');
      obj.name = 'Venkat';
      // shouldn't invoke the intercepter
      expect(method).to.be.equal('getFirstName');
      expect(obj.name).to.be.equal('Venkat');
    });
  });
});
