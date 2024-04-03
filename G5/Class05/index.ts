console.log("Hello from typescript!");

// PRIMITIVE DATA TYPES
let message: string = "Hello world!";
console.log(message);

const fullName: string = "John Doe";
const isDone: boolean = true;
//const age: number = "29"; // it will return error
const age: number = 29;

// *** Type inference ***

// let company: string
let company = "Symphony";
company = "OpenAI";
// company = 5 // it will return error. we cannot assign value that is number to variable that expects value to be string

// Please do not do this at home
let randomValue: any = "Some random value"; // string
randomValue = 10; // number
randomValue = 10 > 5; //boolean

// *** Type with functions

function addNumbers(numberOne: number, numberTwo: number): string {
  return `${numberOne + numberTwo}`;
}

// console.log(addNumbers(10, "2")) // error
console.log(addNumbers(10, 2));

const buildName = (
  firstName: string,
  lastName: string,
  middleName = "", //default value
  age?: number, // optional (it may be provided or may not =) )
  // gender: string // error (we cannot put mendatory parameter after optional one)
  email?: string
): string => {
  if (age) {
    return `${firstName} ${middleName} ${lastName} is ${age} years old.`;
  }
  return `${firstName} ${middleName} ${lastName}.`;
};

console.log(buildName("John", "Doe"));
console.log(buildName("Bob", "Bobski", "Lee"));
console.log(buildName("Sarah", "Ann", "", 26));

const createUser = (
  username: string,
  password: string,
  age?: number,
  gender?: string
) => {
  const userEnitity = {
    username,
    password,
    age,
    gender,
  };

  console.log("User is created:", userEnitity);
};

createUser("some_username", "some_password", undefined, "male");
createUser("some_username_2", "some_password_2");

// *** Arrays
// Older syntax
const bucketListOlder: Array<string> = ["Bananas", "Milk", "Almonds"]; // same as below byt type syntax is older =)
// The values in bucketList are ONLY of type string
const bucketList: string[] = ["Bananas", "Milk", "Almonds"];

// The values of mixedList array can be anything
// !important => dont use any
const mixedList: any[] = ["Value one", false, {}, null, "John Doe", 30];

// The values in the idsList can be of type string or number
// | => pipe
const idsList: (string | number)[] = [1, 3, 2, "some", "id", 3];

// *** Types
console.log("*** TYPES ***");
// type aliases
type ID = string | number;
const firstID: ID = "some_id_value";
console.log(firstID);

const secondID: ID = 123456;
console.log(secondID);

/**
 * {
 *  name: string
 *  type: string
 * }
 */
type Animal = {
  name: string;
  type: string;
  gender?: string;
};

const domesticAnimal: Animal = {
  name: "Fluffy",
  type: "sheep",
};

console.log(domesticAnimal);

const secondDomecticAnimal: Animal = {
  name: "Bubi",
  type: "Cow",
  gender: "female",
};

console.log(secondDomecticAnimal);

// The costum type Dog, will have every property from Animal and it will have breed on it's own
type Dog = Animal & {
  breed: string;
};

type Cat = Animal & {
  color: string;
};

const dog: Dog = {
  name: "Djoni",
  type: "dog",
  breed: "Labrador",
};

console.log(dog);

const cat: Cat = {
  name: "Batman",
  type: "persian cat",
  color: "black",
};

console.log(cat);

console.log("*** INTERFACES ***");
// *** Interfaces
interface Person {
  name: string;
  age: number;
  gender?: string;
}

/**
 * the constant personOne must use/have ONLY the properties that are written in the interface Person
 * since it is using it as a type.
 */
const personOne: Person = {
  name: "Bob Bobski",
  age: 25,
  gender: "male",
  // isAdult: true, // error, meaning the interface Person does not have the property isAdult
};

console.log(personOne);

interface Student {
  name: string;
  subjects: string[];
}

type MyCostumPerson = Person | Student; // this COSTUM TYPE will be either Person or Student
// interface MyCostumPersonTwo = Person | Student // we cannot use interfaces like that

const policeman: MyCostumPerson = {
  name: "John Doe",
  age: 23,
  gender: "male",
};

console.log(policeman);

enum LEVEL {
  JUNIOR = "JUNIOR",
  MEDIOR = "MEDIOR",
  SENIOR = "SENIOR",
}

// Specific usecase for interface (extends). We cannot to achive this with types
interface Programmer extends Person {
  level: LEVEL; // meaning the property level, will have a value from the enum LEVEL
  languages: string[];
}

const firstProgrammer: Programmer = {
  name: "Lee",
  age: 44,
  level: LEVEL.SENIOR,
  languages: ["javascript", "typescript", "rust", "ruby"],
};

console.log(firstProgrammer);

console.log("*** Enums");
// Enums
enum NavigationSites {
  north = "north",
  east = "east",
  south = "south",
  west = "west",
}

console.log(NavigationSites.east);

enum GamingControls {
  W = "GO_FORWARD",
  D = "GO_RIGHT",
  S = "GO_BACK",
  A = "GO_LEFT",
}

console.log(GamingControls.W);

// EXERCISE

// Recipe-Creator

enum DIFFICULTY {
  EASY = "Easy to make",
  MEDIUM = "Medium level to make",
  HARD = "It is hard to make this recipe",
}

interface Recipe {
  id: ID;
  recipeName: string;
  ingrediants: string[];
  difficulty: DIFFICULTY; // (EASY, MEDIUM, HARD)
}

// the values in the array will be objects that used the interface Recipe as type
const recipes: Recipe[] = []; /// declaration & initizialition

const createRecipe = (
  recipeName: string,
  ingrediants: string[],
  difficulty: DIFFICULTY
): Recipe => {
  const recipeEntity: Recipe = {
    id: Date.now(),
    recipeName: recipeName,
    ingrediants: ingrediants,
    difficulty: difficulty,
  };

  return recipeEntity;
};

recipes.push(
  createRecipe(
    "Banana Smoothie",
    ["Banana", "Milk", "Walnuts", "Honey"],
    DIFFICULTY.EASY
  )
);

recipes.push(
  createRecipe("French Toast", ["Bread", "Cheese", "Salama"], DIFFICULTY.EASY)
);

const printRecipes = (listOfRecipes: Recipe[]) => {
  if (!listOfRecipes.length) throw new Error("Please provide valid array");

  listOfRecipes.forEach((recipe) => {
    console.log(`Recipe name is: ${recipe.recipeName}`);
  });
};

printRecipes(recipes);
