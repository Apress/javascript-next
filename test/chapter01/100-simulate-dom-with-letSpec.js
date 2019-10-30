import { expect } from 'chai';

import simulateDom from '../../src/chapter01/100-simulate-dom-with-let';

describe('simulateDom', () => {
  it('should define the function correctly', () => {
    expect(simulateDom).not.to.throw();
  });

  it('should define the same click handler for all elements', () => {
    const dom = simulateDom();
    expect(dom.button1.click()).to.equal('Item 1 is clicked.');
    expect(dom.button2.click()).to.equal('Item 2 is clicked.');
    expect(dom.button3.click()).to.equal('Item 3 is clicked.');
  });
});
