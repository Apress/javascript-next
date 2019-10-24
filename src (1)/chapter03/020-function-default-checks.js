/* eslint-disable prefer-template */

// tag::default-checks[]

/**
 * Builds a url
 *
 * @param {site} the url (required)
 * @param {protocol} can be http or https (optional) - defaults to http
 * @returns {string}
 */
const buildUrl = (site, protocol) => {
  if (!site) { // <1>
    throw new Error('site is required');
  }
  const p = protocol || 'http'; // <2>
  return p + '://' + site;
};

// end::default-checks[]
export default buildUrl;
