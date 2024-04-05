// UNKNOWN
let variableOfTypeUnknownStr: unknown = "This variable has type 'unknown' and requires type checks";
let variableOfTypeUnknownNum: unknown = 10;

// We need to do type checking before executing the code, otherwise compiler will complain because it doen not know of which type is the variable
if(typeof variableOfTypeUnknownStr === "string") {
    const lengthOfUnknown = variableOfTypeUnknownStr.length;
    console.log(lengthOfUnknown);
}

if(typeof variableOfTypeUnknownNum === "number") {
    const exponentialOfUnknown = Math.pow(variableOfTypeUnknownNum, 3);
    console.log(exponentialOfUnknown);
}

// NEVER - type of values that never occur, function that never returns a value
function infiniteLoop(): never {
    while(true) {
        //do something
    }
}

// TYPE
// Types in TypeScript are more flexible and can define primitive, intersection, union, tuple, or different types of data, while interfaces are used to describe the shape of an object. 
type Circle = {
    kind: 'circle',
    radius: number
}

type Rectangle = {
    kind: 'rectangle',
    width: number,
    height: number
}


// Union type shape that can be crcle or rectangle
type Shape = Circle | Rectangle;
const calculateArea = (shape: Shape): number => {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius **2;
    }

    if (shape.kind === 'rectangle') {
        return shape.width * shape.height;
    }
    return 0;
}

type PersonOne = {
    name: string,
    age: number
};

let jill: PersonOne = {
    name: 'Jill',
    age: 20
};

// INTERSECTION
interface Swimmer {
    swim(): void;
}

interface Flyer {
    fly(): void;
}

const duck: Swimmer & Flyer = {
    swim() {
        console.log('Duck is swimming');
    },
    fly() {
        console.log('Duck is flying');
    }
};

function move(animal: Swimmer & Flyer) {
    animal.swim();
    animal.fly()
}

move(duck);


// CLASSES
class Car {
    brand: string;
    color: string;
    year: number;

    constructor(brand: string, color: string, yearOfProd: number) {
        this.brand = brand;
        this.color = color;
        this.year = yearOfProd;
    }

    drive() {
        console.log('The car is driving');
    }
}

const myCar = new Car('Yugo', 'red', 1991);
myCar.drive();

// INHERITANCE
class Person {
    private _id: number; // accessible only within the class
    public firstName: string;
    public lastName: string;
    protected _age: number; // accessible within the class and the cild classes

    constructor(id: number, firstName: string, lastName: string, age: number) {
        this._id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = age
    }

    // Returns the value
    get age(): number {
        return this._age;
    }

    // Sets the value
    set age(value: number) {
        if (value >= 0) {
            this._age = value;
        } else {
            throw new Error("Age cannot be negative")
        }
    }

    displayInfo() {
        console.log(`Id: ${this._id}, First name: ${this.firstName}, Last name: ${this.lastName}, age: ${this._age}`);
    }
}

class Employee extends Person {
    // Child class properties
    private _employeeId: number;
    department: string;

    // call the Employee class constructor
    constructor(id: number, firstName: string, lastName: string, age: number, employeeId: number, department: string) {
        // call the constructor pf the parent (Person) class
        super(id, firstName, lastName, age);
        this._employeeId = employeeId;
        this.department = department
    }

    displayInfo() {
        console.log(`Employee id${this._employeeId}, Department: ${this.department}, Age ${this._age}`);
    }
}

const bob = new Employee(1, 'Bob', 'Bobsky', 18, 123, 'Development');


// ACCESS MODIFIERS (public, private, protected) & GETTERS AND SETTERS 
const me = new Person(1, 'Aneta', 'Stankovska', 32);
me.age = 20;
// me.firstName = "New name" // valid
// me.age = 25; // not valid because age is private property
// bob.employeeId // not valid because employeeId is private


// ABSTRACT CLASSES - blueprint for other classes that cannot be instantiated on their own, we cannot creat object out of abstract class
// An abstract method is a method declared within an abstract class that doesn't have an implementation in the abstract class itself. 
// Instead, it's meant to be implemented by subclasses.

abstract class Animal {
    constructor(public name: string) {
    }

    abstract makeSound(): void ; // abstract methods doesn't have method implementation, only declaration

    move(distance: number) {
        console.log(`${this.name} moved ${distance} km`);
    }
}

class Dog extends Animal {
    makeSound(): void {
       console.log(`${this.name} barks`); 
    }
}

class Bird extends Animal {
    makeSound(): void {
       console.log(`${this.name} chirps`); 
    }
}

// const animal = new Animal('Charlie'); // not allowed, cannot instantiate objects out of abstract 

const dog = new Dog("Buddy");
const bird = new Bird("Sparrow");
bird.makeSound();


// GENERICS - enables reusability of the variables and functions
function echo <T> (arg: T): T {
    return arg;
};

console.log(echo(10));
console.log(echo('Hello World'));
console.log(echo(true));
console.log(echo(null));
console.log(echo(undefined));

function sumNumbersOrString<T>(arg1: T, arg2: T): T {
    if (typeof arg1 === 'number' && typeof arg2 === 'number') {
        return (arg1 + arg2) as T;
    }
    if (typeof arg1 === 'string' && typeof arg2 === 'string') {
        return (arg1 + " " + arg2) as T;
    }

    throw new Error("The arguments are of invalid types")
}

const result1 = sumNumbersOrString(5, 10);
const result2 = sumNumbersOrString("Hello", "World");

console.log(result1);
console.log(result2);

function createPair<S, T>(v1: S, v2: T): [S, T] {
    return[v1, v2]
}

console.log(createPair<string, number>("hello", 42));
console.log(createPair<number, string>(1, "Bob Bobsky"));
console.log(createPair<boolean, boolean>(true, false));




