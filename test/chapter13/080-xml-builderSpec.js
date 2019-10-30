import { expect } from 'chai';

import jsonToXmlBuilder from '../../src/chapter13/080-xml-builder';

describe('chapter13', () => {
  describe('080-xml-builder', () => {
    it('should define all the objects', () => {
      expect(jsonToXmlBuilder).not.to.be.undefined;
      expect(jsonToXmlBuilder).to.be.a('function');
    });

    it('should correctly create attrs', () => {
      const json = jsonToXmlBuilder().user({name:'raju'}).end();
      expect(json).to.be.equal('{"user":{"@name":"raju"}}');
    });

    it('should correctly create attrs and text', () => {
      const json = jsonToXmlBuilder().user({name:'raju'}, 'looselytped').end();
      expect(json).to.be.equal('{"user":{"@name":"raju","#text":"looselytped"}}');
    });

    it('should correctly create children', () => {
      const json = jsonToXmlBuilder()
                    .user({name:'raju'}, 'looselytped')
                      .address({zip:12345},'Cupertino')
                    .end();
      expect(json).to.be
      .equal('{"user":{"@name":"raju","#text":"looselytped","address":{"@zip":12345,"#text":"Cupertino"}}}');
    });

        it('should correctly create multiple children', () => {
      const json = jsonToXmlBuilder()
                    .user({name:'raju'}, 'looselytped')
                      .address({zip:12345},'Cupertino')
                    .up()
                    .up()
                    .user({name:'thomas'}, 'neo')
                      .address({zip:11111},'theMatrix')
                    .end();
      expect(json).to.be
      .equal('{"user":[{"@name":"raju","#text":"looselytped","address":{"@zip":12345,"#text":"Cupertino"}},{"@name":"thomas","#text":"neo","address":{"@zip":11111,"#text":"theMatrix"}}]}');
    });
  });
});
