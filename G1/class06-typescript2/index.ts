// Primitive Types
const isDone: boolean = true;
const age: number = 30;
const percentage: number = 1.5;
const color: string = 'green';
let carOwner: undefined = undefined;
let catName: null = null;

let test: any; // try to avoid using any
test = true;

// catName = 'something'; // will throw an error

// console.log(color);

// Interfaces

interface User {
	name: string;
	age?: number; // Optional property
}

let stefan: User = {
	name: 'Stefan',
	age: 20,
};

let nikola: User = {
	name: 'Nikola',
};

function printUserInfo(user: User): void {
	console.log(`User: ${user.name}.`);
	if (user.age) {
		console.log(`Users age: ${user.age}`);
	}
}

printUserInfo(stefan);
printUserInfo(nikola);

// Classes

class Point {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	draw() {
		console.log(`Point is at ${this.x}, ${this.y}`);
	}
}

const newPoint = new Point(2, 3);

newPoint.draw();

// Functions

function sum(a: number, b: number): number {
	if (a > 2 && b > 2) {
		return a + b;
	} else {
		return 0;
	}
}

// Generics
function identity<T>(arg: T): T {
	return arg;
}

let dog = identity<string>('dog');
let isMarried = identity<boolean>(true);
let studentsCount = identity<number>(20);

console.log(dog, isMarried, studentsCount);

function getRandomElement<T>(items: T[]): T {
	const randomIndex = Math.floor(Math.random() * items.length);

	return items[randomIndex];
}

const randomNumber = getRandomElement<number>([1, 2, 3]);
const randomName = getRandomElement<string>(['ivo', 'iva', 'john']);
const randomSomething = getRandomElement([true, 'string', 2, 3, 4]);

console.log(randomName, randomNumber, randomSomething);

// Enums
enum Color {
	Red, // 0
	Green, // 1
	Blue, // 2
}

console.log('Red', Color.Red);
console.log('Green', Color.Green);
console.log('Blue', Color.Blue);

enum DaysOfTheWeek {
	Monday = 'Monday',
	Tuesday = 'Tuesday',
}

enum Months {
	Jan = 'January',
	Feb = 'February',
}

console.log('Monday', DaysOfTheWeek.Monday);

// Union Types
function printId(id: number | string): void {
	console.log(`Your id is: ${id}`);
}

printId(123);
printId('nekoj string');
// printId(true);

// Async Await

function delay(ms: number): Promise<void> {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function greeting(name: string): Promise<string> {
	await delay(1000);
	return `Hi ${name}`;
}

async function run(): Promise<void> {
	const theGreeting = await greeting('John');
	console.log(theGreeting);
}

// run();

// Advanced Types and Type Guards
type Fish = { swim: () => void };
type Bird = { fly: () => void };

let dzivdzi: Bird = {
	fly() {
		console.log('Dzivdzi is flying');
	},
};

dzivdzi.fly();

let nemo: Fish = {
	swim() {
		console.log('nemo is swimming');
	},
};

nemo.swim();

function move(animal: Fish | Bird) {
	if ('swim' in animal) {
		return animal.swim();
	}

	return animal.fly();
}

// function isFish(pet: Fish | Bird) {
// 	console.log(pet, (pet as Fish).swim);
// 	return (pet as Fish).swim !== undefined;
// }

// console.log('FISH', isFish(dzivdzi));
// console.log('BIRD', isFish(nemo));

// Type Assertions
let someValue: any = true;
// let lengthOfSomeValue = (someValue as string).length
let lengthOfSomeValue: number = (<string>someValue).length;

console.log(someValue, lengthOfSomeValue);

// const myCanvas = document.getElementById('my_canvas') as HTMLCanvasElement;

const id: number = 123;

const idInDb: string = id as unknown as string;

console.log(typeof id, typeof idInDb);

// Types VS Interfaces

// Decorators

//
