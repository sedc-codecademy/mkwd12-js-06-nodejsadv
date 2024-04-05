// Asserting Types in an Array

const rawData: string =
	'[{ "name": "John", "age": 30 }, {"name": "Jane", "age": 20}]';

// we are asserting the type of the data variable
// to be an array of objects with name and age properties
// we clearly know that the data is an array of objects with name and age properties, so we can assert the type
// do not use assertion if you are not sure about the type of the data, guessing the type is not a good practice
const data: { name: string; age: number }[] = JSON.parse(rawData) as {
	name: string;
	age: number;
}[];

// console.log(data);
// console.log(rawData);

// Working with Arrays
let colors: string[] = ['white', 'black', 'yellow'];
// let colors: Array<string> = ['white', 'black', 'yellow'] // same as above

const numbers: number[] = [1, 2, 3];

// Working with Generics
interface MultiDimensionalArray<T> {
	// [key: number] - index signature, key is a number and value is T or MultiDimensionalArray<T>, e.g. [1, [2, [3, [4, [5, [6]], 7]], 8]]
	[key: number]: T | MultiDimensionalArray<T>; // T or MultiDimensionalArray<T> - recursive type
	length: number;
}

// Recursive function
// flatten([1, [2, [3, [4, [5, [6]], 7]], 8]]) => [1, 2, 3, 4, 5, 6, 7, 8]
function flatten<T>(array: MultiDimensionalArray<T>, result: T[] = []): T[] {
	// we are iterating over the array
	for (let i = 0; i < array.length; i++) {
		// if the current element is an array
		if (Array.isArray(array[i])) {
			// we are calling the flatten function recursively
			flatten(array[i] as T[], result);
		} else {
			// if the current element is not an array, we are pushing it to the result array
			result.push(array[i] as T);
		}
	}

	return result;
}

// with the help of the flatten function, we can flatten any multi-dimensional array
// with the help of generics, we can flatten any multi-dimensional array of any type
console.log(flatten([1, [2, [3, [4, [5, [6]], 7]], 8]]));
console.log(flatten(['ivo', ['ivan', ['nikola']], 'igor', ['stefan']]));

// Tuple
// Tuple is an array with a fixed number of elements whose types are known, but they don't have to be the same
type Student = [string, number, number[]];

function getStudent(name: string, age: number, grades: number[]): Student {
	let sName = name;
	let sAge = age;
	let sGrades = grades;

	return [sName, sAge, sGrades];
}

const ivan = getStudent('Ivan', 20, [5, 5, 5]);

console.log(ivan);

// Types
interface Animal {
	type: 'dog' | 'cat' | 'cow';  // string literal type
	age: number;
}

// extends keyword is used to create a new interface that extends an existing interface
interface Pet extends Animal {
	name: string;
}

// type is different from interface in TypeScript
// type is used to create an alias for a type or to create a union type or intersection type or to create a type that is a combination of other types
// interface is used to create a new type that can be implemented by a class or object or to create a new type that can be extended by another type
type VisitReason = 'checkup' | 'sickness' | 'injury';

type Visit = {
	pet: Pet;
	date: Date;
	reason: VisitReason;
};

class VetClinic {
	// JavaScript private property
	// #visits = [];
	// TypeScript private property
	private visits: Visit[] = []; // when we define a type for the property with TS, we have to initialize it with a value.

	logVisit(visit: Visit) {
		this.visits.push(visit);
	}

	getVisits(): Visit[] {
		return this.visits;
	}
}

let clinic = new VetClinic();

// console.log(clinic.visits);
// console.log(clinic.#visits);

const charlie = {
	name: 'Charlie',
	type: 'dog',
	age: 3,
} satisfies Pet;
// satisfies is a type guard that checks if the object satisfies the Pet interface
// it's similar to using const charlie: Pet = { name: 'Charlie', type: 'dog', age: 3 };

clinic.logVisit({
	date: new Date(),
	reason: 'checkup',
	pet: charlie,
});

console.log(clinic.getVisits());

// Decorators
// Decorators are a design pattern that allows us to add new functionality to an existing object without modifying its structure
function CanFly(target: Function) {
	// target is the constructor function of the class
	// we are adding a new method to the prototype of the class
	target.prototype.fly = function () {
		console.log(`${this.name} is flying!`);
	};
}

function HasSuperStrength(target: Function) {
	target.prototype.lift = function () {
		console.log(`${this.name} is lifting a car!`);
	};
}

function Invisible(target: Function) {
	target.prototype.invisible = function () {
		console.log(`${this.name} has become invisible!`);
	};
}
// Decorators are functions that are prefixed with the @ symbol
// @CanFly
// @HasSuperStrength
// @Invisible
// class Superhero {
// 	name: string;

// 	constructor(name: string) {
// 		this.name = name;
// 	}

// 	greet() {
// 		console.log(`Hi, I'm ${this.name}`);
// 	}
// }

// const batman = new Superhero('Batman');

// batman.greet();
// (batman as any).invisible();
// (batman as any).fly();
// (batman as any).lift();

interface Character {
	name: string;
	health: number;
	speak(): string; // method that returns a string
}

class Hero implements Character {
	// public name: string;
	// public health: number;

	// when we use the public keyword in the constructor, we don't have to define the properties in the class
	constructor(public name: string, public health: number) {
		// this.name = name;
		// this.health = health;
	}

	public speak() {
		return `Hi I'm ${this.name}`;
	}
}

@CanFly
@HasSuperStrength
@Invisible
class Superhero implements Character {
	name: string;
	health: number;

	constructor(name: string, health: number) {
		this.name = name;
		this.health = health;
	}

	speak(): string {
		return `Hi I'm ${this.name}`;
	}

	greet() {
		console.log(`Hi, I'm ${this.name}`);
	}
}

// const hero1 = new Hero('Hero1', 1000);

// console.log(hero1.speak());

// LogBattleEvent is a decorator function that logs a message when a new battle event is created
// it's a decorator factory that takes a constructor function as an argument
function LogBattleEvent<T>(constructor: new (...args: any[]) => T): void {
	console.log(`${constructor.name} battle event created.`);
}

@LogBattleEvent
class Battle<T extends Character> {
	// T extends Character> - generic type constraint that specifies that T must be a subtype of Character
	constructor(public participantOne: T, public participantTwo: T) {}

	startBattle(): string {
		return `${this.participantOne.speak()} VS ${this.participantTwo.speak()}`;
	}
}

const spiderman = new Hero('Spider-man', 100);
const superman = new Superhero('Superman', 200);

const battle1 = new Battle(spiderman, superman);

console.log(battle1.startBattle());

// Classes keywords

abstract class Vehicle {
	// protected keyword is used to define a property that is accessible within the class and its subclasses
	// if we don't use protected keyword, the property is public by default
	// private keyword is used to define a property that is accessible only within the class
	// protected is different from private because protected properties are accessible in subclasses
	// readonly keyword is used to define a property that can't be changed after it's initialized
	// static keyword is used to define a property or method that belongs to the class itself, not to the instances of the class
	// static properties and methods can be accessed without creating an instance of the class
	// static properties and methods are accessed using the class name
	// abstract keyword is used to define an abstract class or method
	// abstract class can't be instantiated, it can only be extended by other classes
	// abstract method is a method that doesn't have an implementation in the abstract class

	protected readonly numberOfWheels: number;

	constructor(numberOfWheels: number) {
		this.numberOfWheels = numberOfWheels;
	}

	abstract startEngine(): void;

	private displayNumberOfWheels(): void {
		console.log(`This vehicle has ${this.numberOfWheels} wheels.`);
	}

	static getVehicleType(): string {
		return 'Generic Vehicle';
	}
}

class Car extends Vehicle {
	engineStarted: boolean = false;
	private _model: string;
	static numberOfCars: number = 0;

	constructor(model: string, numberOfWheels: number = 4) {
		super(numberOfWheels);
		this._model = model;
		Car.numberOfCars++;

		// this.numberOfWheels = 123;
	}

	startEngine(): void {
		this.engineStarted = true;
		console.log('Engine has stared.');
	}

	get model() {
		return this._model;
	}

	set model(model: string) {
		this._model = model + ' - MK';
	}
}

const yugo = new Car('Yugo', 4);
const fico = new Car('Fico', 4);
const opel = new Car('Opel', 4);

console.log(yugo);
console.log(fico);
console.log(opel);
console.log(Car.numberOfCars);
