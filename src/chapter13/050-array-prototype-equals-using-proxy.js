/* eslint-disable func-names, no-console */
// tag::050-array-prototype-equals-using-proxy-1[]
const equals = function (other) {
  if (!other) return false;
  if (!Array.isArray(other)) return false;
  if (this.length !== other.length) return false;

  const [fMe, ...rMe] = this;
  const [fOther, ...rOther] = other;

  if (fMe === fOther) {
    return true;
  }
  if ((rMe.length === 0) && (rOther.length === 0)) {
    return true;
  }
  return rMe.equals(rOther);
};
// end::050-array-prototype-equals-using-proxy-1[]
// tag::050-array-prototype-equals-using-proxy-2[]

const comparableArray = (arr) => { // <1>
  const handler = { // <2>
    get(target, property) { // <3>
      if (property === 'equals') { // <4>
        return equals;
      }
      return Reflect.get(target, property); // <5>
    },
  };
  return new Proxy(arr, handler);
};

const first = comparableArray([1, 2, 3, [4, 5]]);
const second = comparableArray([1, 2, 3, [4, 5]]);
const third = comparableArray([1, 2, 3]);

// prints 'true'
console.log(first.equals([1, 2, 3, [4, 5]]));  // <2>
// prints 'false'
console.log(first.equals(third));
// end::050-array-prototype-equals-using-proxy-2[]
export {
  comparableArray,
  first,
  second,
  third,
};


const raju = function (executor, context = null) {
  const handler = {
    has() {
      return true;
    },
    get(object, prop) {
      parts.push(prop);
      return proxy;
    }
  };
  var parts = [];
  var proxy = new Proxy(function () {
    var returnVal = executor.call(context, parts);
    parts = [];
    return returnVal;
  }, handler);
  return proxy;
}
const example = raju((parts) => parts.join('--'));
console.log(example.a.b.c.d());
console.log(example.e.f.g.h());

