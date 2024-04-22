import { Trip } from '../entity/trip/trip.interface';

function copyArray<T>(items: T[]) {
  return new Array<T>(...items);
}

// working with strings
const stringsArray = copyArray<string>(['one', 'two', 'three']);
console.log(stringsArray);

// working with numbers
const numberArray = copyArray<number>([1, 2, 3, 4]);
console.log(numberArray);

const tripsArray = copyArray<Trip>([{} as Trip]);
console.log(tripsArray);
