/* eslint-disable prefer-template */

// tag::default-args[]
const buildUrl = (site, protocol = 'http') => {
  if (!site) {
    throw new Error('site is required');
  }
  return protocol + '://' + site;
};

// end::default-args[]
export default buildUrl;
