import {
  expect,
} from 'chai';

import greeter from '../../src/chapter07/025-revealing-module-pattern';

describe('chapter07', () => {
  describe('025-revealing-module-pattern', () => {
    it('should define all the objects', () => {
      expect(greeter).to.be.a('object');
      expect(greeter.greet).to.be.a('function');
      expect(greeter.salutation).to.be.a('function');
    });

    it('should greet the invokee', () => {
      expect(greeter.greet('Raju')).to.be.equal('Hola Raju!');
    });
  });
});
