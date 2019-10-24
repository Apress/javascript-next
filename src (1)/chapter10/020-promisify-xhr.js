/* eslint-disable no-undef */
/* eslint-disable no-unused-vars, implicit-arrow-linebreak */
// DUPLICATED IN 030-promise-all.js!
// tag::020-promisify-xhr[]
const asyncRequest = (method, url) => // <1>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onload = () => resolve(xhr.response); // <2>
    xhr.onerror = () => reject(new Error(xhr.statusText)); // <3>
    xhr.send();
  });

const req1 = asyncRequest('GET', 'https://my-json-server.typicode.com/typicode/demo/posts');
// end::020-promisify-xhr[]
export default asyncRequest;
