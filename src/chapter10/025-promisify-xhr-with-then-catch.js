/* eslint-disable no-console */
import asyncRequest from './020-promisify-xhr';

// tag::025-promisify-xhr-with-then-catch[]
const req1 = asyncRequest('GET', 'https://my-json-server.typicode.com/typicode/demo/posts');

req1
  .then(json => JSON.parse(json)) // <1>
  .then(resp => resp.map(item => item.id))
  .then((ids) => {
    console.log(`Found ${ids.length} posts`);
    return ids;
  })
  .catch(err => console.log(err)); // <2>
// end::025-promisify-xhr-with-then-catch[]
export default asyncRequest;
