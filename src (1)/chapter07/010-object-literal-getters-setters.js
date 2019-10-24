/* eslint-disable no-console, no-underscore-dangle */
/* eslint-disable object-shorthand, func-names */
// tag::object-literal-getter-setter[]
const song = {
  name: 'Yellow Submarine', // <1>
  get duration() { // <2>
    console.log('Getter is invoked');
    return this._duration ? (this._duration / 60) : 0;
  },
  set duration(inMin) { // <3>
    if (inMin <= 0) { // <4>
      throw new Error('duration of song cannot be less or equal to 0 min');
    }
    console.log(`Setter is invoked with ${inMin}`);
    this._duration = inMin * 60; // <5>
  },
  getName: function () { // <6>
    return this.name;
  },
};

console.assert(song.name === 'Yellow Submarine'); // <7>

// song.duration = -1; // <8>
song.duration = 3.00; // <9>
console.assert(song.duration === 3); // <10>

console.assert(song.getName() === 'Yellow Submarine'); // <11>
// end::object-literal-getter-setter[]

export default song;
