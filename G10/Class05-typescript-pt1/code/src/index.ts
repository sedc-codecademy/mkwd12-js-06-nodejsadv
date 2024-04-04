// Any JS code is a valid TS code. The vice-versa does not work 

console.log('Hello world'); // This will compile to the same code
let myNumber: number = 10; // This will compile to a different code
// myNumber = 'Blabla' // this is not valid code, will throw error
myNumber = 100;


// // TYPE INFERING - detect the type of the variable based on its value
let me = 'Aneta';
// me = 10; // Will not work because me has implicit type of string
// me = true; // Will also not work
me = "Tina" // Will work

// STRING 
const firstName: string = 'Aneta';
// firstName = 'Bob'; // Will throw compile time error since const is not reassignable
let lastName: string = 'Stankovska';
lastName = 'Something else'; // reassign is only possible if we define the variable with keyword "let"

// NUMBER
let age: number = 25;
let year = 2024; 
let largeNumber: number = 123_456_789;

// BOOLEAN
const isValid: boolean = false;
const isGreaterThen: boolean = 20>10;
// console.log(isGreaterThen);
// console.log(isValid);

let varOfTypeAny: any = 'Jill';
varOfTypeAny = false;
varOfTypeAny = 70;
varOfTypeAny = {};
varOfTypeAny = null;

let numberVariable: number = 100;
let arrayVariable: any = [1, 2, 3, 4];
console.log(arrayVariable.length);
// console.log(numberVariable.length); // will trhrow compile time error
// console.log(varOfTypeAny.length); will throw runtime error

// ARRAY & UNION TYEPS
const favoriteFruits: string[] = ['apple', 'banana', 'orange', 'mango'];
const favoriteNumbers: number[] = [5, 10, 18];
const bucketList: Array<string> = ['bread', 'milk'];
const randomArray: (string | number)[] = ['Hello', 1, 'Bob']; // Union type
const mixedArray: (string | number[])[] = ['Bob', [1, 2, 3]];

// const randomArray // CAMEL CASE
// const RandomArray // PASCAL CASE
// const random_array // SNAKE CASE

let currentYear: string | number = 2024;
currentYear = '2024';

function render(document) {
    console.log(document);
}

// To turn off the error:
// 1. set the type to any
// 2. set the noImplicitAny to false in tsconfig.json

// TUPLE - fixed length array wher each particular element has its own type
// let user: [number, string] = [1, 'John', 2]; // not valid - 3 elements but only 2 allowed
let user: [number, string] = [1, 'John']; // valid
user.push(2);
console.log(user); // absolutely valid :D
// console.log(user[2]); // not valid

// ENUM - List of related values/constants
const enum Size {
    s=1, 
    m, 
    l
}; // adding const before the enum optimizes the compilation process
const mySize = Size.m;
console.log('MySize', mySize); // It starts from 0 automatically, but we can assign a different value to the first element of the enum, and then that number will be the starting index

enum PaymentMethod {
    CASH = 'cash',
    CARD = 'card',
    CHECK = 'check'
};

const selectPaymentMethod = (paymentMethod :PaymentMethod): string | undefined => {
    if (paymentMethod === PaymentMethod.CASH) {
        return 'Processing payment';
    }
    // return 'We cannot process the payment';
}

// FUNTIONS
function calculateTax(amount: number): number {
    return amount * 1.3;
}

const calculateProgressiveTax = (amount: number): number => {
    if(amount > 60000) {
        return amount * 1.5
    }
    return amount * 1.3;
}

const greetUser = (user: string): void => {
    console.log(`Hello ${user}`)
};

const finalAmountWithTax = calculateProgressiveTax(50000);
console.log(finalAmountWithTax);


// OBJECTS
let employee: {id: number, name: string, age?: number, hiringDate: (date: Date) => void} = {
    id: 1,
    name: 'John',
    hiringDate: (date: Date) => {
        console.log(date);
    }
};

// adding ? after the property makes that property optional
employee.age = 30;
employee.id = 2;
console.log(employee.hiringDate(new Date()));

// NULLABLE
function greet(name: string | null | undefined) {
    if (name) {
        console.log(name.toUpperCase());
    }
    console.log('Hello');
}

greet(undefined);


// INTERFACE
interface Person {
    firstName: string;
    lastName: string;
    age?: number;
}

let jill: Person = {
    firstName: 'Jill',
    lastName: 'Wayne',
    age: 20
}

// Inherits all the properties from Peaon interface and adds more 
interface Employee extends Person {
    jobTitle: string,
    salary: number,
    employmentDate?: Date
}

let johnDoe: Employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 45,
    jobTitle: 'Software Developer',
    salary: 50000,
    employmentDate: new Date('2021-01-01')
}

interface Pet {
    name: string,
    age?: number // optional property
}

function greetPet(pet: Pet): string {
    if (pet.age) {
        return `Hello, ${pet.name}! You are ${pet.age} old`;
    }  
    return `Hello, ${pet.name}!`;
}

function greetPetVoid(pet: Pet): void {
    if (pet.age) {
        console.log(`Hello, ${pet.name}! You are ${pet.age} old`);
    }  else {
        console.log(`Hello, ${pet.name}!`);
    }
}

const greeting = greetPet({name: 'Bella', age: 2});
// console.log(greeting);

greetPetVoid({name: 'Bella', age: 2});

// TYPE ASSERTION 
let bobBobsky = {} as Employee;