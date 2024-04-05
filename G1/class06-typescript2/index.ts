// Asserting Types in an Array

const rawData: string =
	'[{ "name": "John", "age": 30 }, {"name": "Jane", "age": 20}]';

const data: { name: string; age: number }[] = JSON.parse(rawData) as {
	name: string;
	age: number;
}[];

// console.log(data);
// console.log(rawData);

let colors: string[] = ['white', 'black', 'yellow'];
// let colors: Array<string> = ['white', 'black', 'yellow']

const numbers: number[] = [1, 2, 3];

// Working with Generics

interface MultiDimensionalArray<T> {
	[key: number]: T | MultiDimensionalArray<T>;
	length: number;
}

function flatten<T>(array: MultiDimensionalArray<T>, result: T[] = []): T[] {
	for (let i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			flatten(array[i] as T[], result);
		} else {
			result.push(array[i] as T);
		}
	}

	return result;
}

console.log(flatten([1, [2, [3, [4, [5, [6]], 7]], 8]]));

console.log(flatten(['ivo', ['ivan', ['nikola']], 'igor', ['stefan']]));

// Tuple
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
	type: 'dog' | 'cat' | 'cow';
	age: number;
}

interface Pet extends Animal {
	name: string;
}

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
	private visits: Visit[] = [];

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

clinic.logVisit({
	date: new Date(),
	reason: 'checkup',
	pet: charlie,
});

console.log(clinic.getVisits());

// Decorators
function CanFly(target: Function) {
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
	speak(): string;
}

class Hero implements Character {
	// public name: string;
	// public health: number;

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

function LogBattleEvent<T>(constructor: new (...args: any[]) => T): void {
	console.log(`${constructor.name} battle event created.`);
}

@LogBattleEvent
class Battle<T extends Character> {
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
