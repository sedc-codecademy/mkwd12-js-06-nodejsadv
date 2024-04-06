console.log("From the ts file");

let firstName = "Borche";

firstName = "Ivan";

// Primitive data types in typscript

const lastName: string = "Apostolovski";

let age: number = 31;

age = 100;

console.log(age);

const empty = null;

//When initializing a variable with a value , typescript will assign the type of that value as the type of the variable itself, this is called type inferrence

let isActive = true;

//When we don't initialize a variable , always set a type for that data that it will contain
let academyName: string;

academyName = "SEDC";

//! Any is not okay and should be used by law

let dontUseMe: any = "I will break your code";

dontUseMe = {
  msg: "Like this for example",
};

dontUseMe = true;

dontUseMe = ["Do you get the point already"];

dontUseMe = undefined;

// Objects

const user: {
  firstName: string;
  title: string;
  age: string;
} = {
  firstName: "Konstantin",
  title: "Student",
  age: "20/21",
};

type User = {
  firstName: string;
  title: string;
  age: string;
  //Putting question mark before the type of a property makes it optional
  city?: string;
};

//Use ctrl + space for autocompletion of missing properties in objects
const userTwo: User = {
  firstName: "John",
  title: "Teacher",
  age: "40/60",
};

console.log(userTwo);

//Arrays

const fruits: string[] = ["apples", "oranges", "lemons"];

const names: string[] = ["John", "Jane"];

const grades: number[] = [1, 2, 3, 4];

const combined: number[] = [...grades, 3, 2, 1];

combined.push(100);

const usersArray: User[] = [user, userTwo];

//Union types

// If overused union types are the same as any and can only reduce all the benefits that you gain from typescript
let academyTitle: string | number = "SEDC";

academyTitle = 10;

//! UNION ARRAY EXAMPLE, AVOID AT ALL COSTS
const mixedArray: (string | number)[] = [1, 2, 3, 4];

//Enums

enum Classic {
  TYPE_ONE,
  TYPE_TWO,
  TYPE_THREE,
}

enum Status {
  ACTIVE = "active",
  ON_HOLD = "on-hold",
  CANCELLED = "cancelled",
}

//Alternative way
const statuses = {
  ACTIVE: "active",
  ON_HOLD: "on-hold",
  CANCELLED: "cancelled",
};

type Device = {
  title: string;
  status: Status; //: "active" | "on-hold" | "cancelled"
};

//Functions

//All parameters in functions need to be given a type and after the argument list you can add the return type yourself or you can let typescript use type inference for you and guess the return type
const addTwoNumbers = (numOne: number, numTwo: number): number => {
  // if (numOne > 10) return numOne + numTwo;

  return numOne + numTwo;
};

//Funcitons in ts must be called with the exact types and number of arguments as outlined in function definition
console.log(addTwoNumbers(1, 3));

//Functions that don't return a value use the void return type
const printFullName = (firstName: string, lastName: string): void => {
  console.log(`${firstName} ${lastName}`);
};

// ?:  is used to declare some arguments to be optional and they do not need to be provided
const sayHello = (name?: string) => {
  console.log(`${name || "User"} says hello`);
};

sayHello("Ivan");
sayHello();

//Interfaces

interface Product {
  title: string;
  stock: number;
  description: string;
  category: string;
  price: number;
  rating?: number;

  //If void is used, you can return anything but you should NOT DO IT
  printInfo: () => void;
}

const shoes: Product = {
  title: "Dress shoes",
  stock: 120,
  description: "Very fancy shoes",
  category: "Footwear",
  price: 119.99,
  rating: 9.4,
  printInfo() {
    console.log(`${this.title} : ${this.description}`);
  },
};

shoes.printInfo();

//This is the classic way of working with constructors
class WashingMachine implements Product {
  title: string;
  stock: number;
  description: string;
  category: string;
  price: number;
  rating: number;
  serialNumber: string = "A123182381";

  constructor(
    title: string,
    stock: number,
    description: string,
    category: string,
    price: number,
    rating: number
  ) {
    this.title = title;
    this.stock = stock;
    this.description = description;
    this.category = category;
    this.price = price;
    this.rating = rating;
  }

  printInfo() {}
}

//Modern typescript way of working with classes
class Laptop implements Product {
  readonly productionYear = 2017;
  // Private can only be accessed by the class meaning constructor function and methods
  private serialNumber: string = "A123123h1kj23hjk12";

  constructor(
    public title: string,
    public stock: number,
    public description: string,
    public category: string,
    public price: number,
    public rating: number
  ) {}

  printInfo() {
    console.log(`${this.title} ${this.description}`);
  }

  getSerialNumber() {
    return this.serialNumber;
  }
}

const hpLaptop = new Laptop(
  "ProBook",
  192,
  "Its a laptop, what else can i say",
  "Laptops",
  1999,
  5
);

hpLaptop.price = 1;
// hpLaptop.serialNumber = "HACKED BY RUSSIANS";
console.log(hpLaptop.getSerialNumber());

console.log(hpLaptop.productionYear);

// Exercise using typescript write a small javascript program that will have the following functionality

/*
    1. Create an array that will contain objects of type Student ( create interface with properties by your choice)
    2. Create methods for creating, printing, updating or deleting students ( add type safety to all of them )
    3. Whenever possible use typescript to help you catch errors before they happen
*/
