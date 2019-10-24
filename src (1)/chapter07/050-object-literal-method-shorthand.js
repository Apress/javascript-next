/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
// tag::object-literal-method-shorthand[]
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
  getName() { // <1>
    return this.name;
  },
  setName(name) { // <2>
    this.name = name;
  },
};

console.assert(song.getName() === 'Yellow Submarine');
song.setName('All You Need Is Love');
console.assert(song.getName() === 'All You Need Is Love');
// end::object-literal-method-shorthand[]

export default song;
