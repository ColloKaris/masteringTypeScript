// Typeof Guards
function triple(value: number | string): string | number {
  if (typeof value === 'string') {
    return value.repeat(3);
  }
  return value * 3;
}

// Truthiness Guards
const el = document.getElementById('idk');

// Truth check
if (el) {
  el;
}

const printLetters = (word?: string) => {
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    console.log('YOU DID NOT PASS IN A WORD');
  }
};

// EQUALITY NARROWING
function someDemo(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase();
  }
}

// in Operator Narrowing
interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRunTime(media: Movie | TVShow) {
  if ('numEpisodes' in media) {
    return media.numEpisodes * media.episodeDuration;
  }
  return media.duration;
}

// instanceof Narrowing
function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString());
  }
}

class User {
  constructor(public username: string) {}
}
class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if (entity instanceof User) {
    entity;
  } else {
    entity;
  }
}

// TYPE PREDICATES
interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    animal;
    return 'Meow';
  } else {
    animal;
    return 'Woof';
  }
}

// DISCRIMINATD UNIONS
interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: 'rooster';
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: 'cow';
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: 'pig';
}

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: 'sheep';
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case 'pig':
      animal
      return 'Oink!';
    case 'cow':
      animal
      return 'Mooo!';
    case 'rooster':
      animal
      return 'Cockadoodledoo';
      case 'sheep':
        return "Baaa!";
    default:
      // We should never make it here, if we handled all cases correctly
      // this is a way to future proof our code and make it very clear
      // and have Typescript yell at us if we were to add in a new type of 
      // farm animal and forget to handle it
      const shouldNeverGetHere: never = animal;
      return shouldNeverGetHere; 
  }
}

const stevie: Rooster = {
  name: "Steviee Chicks",
  weight: 2,
  age: 1.5,
  kind: "rooster"
}

console.log(getFarmAnimalSound(stevie));
