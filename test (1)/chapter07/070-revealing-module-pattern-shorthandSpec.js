import {
  expect,
} from 'chai';

import greeter from '../../src/chapter07/070-revealing-module-pattern-shorthand';

describe('chapter07', () => {
  describe('070-revealing-module-pattern-shorthand', () => {
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
