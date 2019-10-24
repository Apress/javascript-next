/* eslint-disable no-restricted-syntax, no-console */
// tag::060-singleton-using-proxies[]
const singletonFactory = (constructorFn) => { // <1>
  let instance; // <2>
  const handler = {
    construct(target, args) { // <3>
      if (!instance) {
        instance = Reflect.construct(constructorFn, args); // <4>
      }
      return instance; // <5>
    },
  };
  return new Proxy(constructorFn, handler);
};

class SuperHeroService { // <6>
  constructor() {
    this.heroes = [
      'IronMan',
      'Captain America',
      'Wasp',
      'Black Widow',
    ];
  }

  getHeroes() {
    return this.heroes;
  }

  addHero(hero) {
    this.heroes.push(hero);
  }
}

const SingletonSuperHeroService = singletonFactory(SuperHeroService); // <7>

const service1 = new SingletonSuperHeroService();
const service2 = new SingletonSuperHeroService(); // <8>
// prints 'true'
console.log(service1 === service2); // <9>
// end::060-singleton-using-proxies[]
export {
  singletonFactory,
  SuperHeroService,
};
