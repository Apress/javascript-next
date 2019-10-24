/* eslint-disable no-console */
/* eslint-disable operator-linebreak, no-restricted-syntax */
import {
  FriendsService,
} from './040-simple-async-iterable';

const result =
// tag::050-simple-async-iterable-for-async-await[]
(async () => {
  for await (const friend of new FriendsService()) { // <1>
    console.log(friend);
  }
})();
// end::050-simple-async-iterable-for-async-await[]
export default result;
