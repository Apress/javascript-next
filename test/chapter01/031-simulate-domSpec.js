import { expect } from 'chai';

import simulateDom from '../../src/chapter01/031-simulate-dom';

describe('simulateDom', () => {
  it('should define the function correctly', () => {
    expect(simulateDom).not.to.throw();
  });

  it('should define the same click handler for all elements', () => {
    const dom = simulateDom();
    expect(dom.button1.click()).to.equal('Item 4 is clicked.');
    expect(dom.button2.click()).to.equal('Item 4 is clicked.');
    expect(dom.button3.click()).to.equal('Item 4 is clicked.');
  });
});
