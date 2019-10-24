import { expect } from 'chai';

import ele from '../../src/chapter05/060-emmet-handler';

describe('chapter05', () => {
  describe('060-emmet-handler', () => {
    it('should define all the objects', () => {
      expect(ele).not.to.be.undefined;
      expect(ele).to.be.a('function');
    });

    it('should correctly fixed and dynamic parts', () => {
      const heading = 'Hello Template Handlers';
      const exp1 = '<h1>Hello Template Handlers</h1>';
      expect(ele`h1 ${heading}`).to.be.equal(exp1);
      const exp2 = '<h1 id="main">Hello Template Handlers</h1>';
      expect(ele`h1#main ${heading}`).to.be.equal(exp2);
      const exp3 = '<h1 class="title">Hello Template Handlers</h1>';
      expect(ele`h1.title ${heading}`).to.be.equal(exp3);
      const exp4 = '<h1 id="main" class="title content">Hello Template Handlers</h1>';
      expect(ele`h1.title.content#main ${heading}`).to.be.equal(exp4);
      const exp5 = '<h1 id="main" class="title content"><div>Hello Template Handlers</div></h1>';
      expect(ele`h1.title.content#main ${ele`div${heading}`}`).to.be.equal(exp5);
      const exp6 = '<h1 id="main" class="title content"><div class="banner">Hello Template Handlers</div></h1>';
      expect(ele`h1.title.content#main ${ele`div.banner${heading}`}`).to.be.equal(exp6);
    });
  });
});
