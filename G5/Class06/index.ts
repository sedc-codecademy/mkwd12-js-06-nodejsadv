function separator(title: string) {
  console.log(`--- *** ${title} *** ---`);
}

separator("CLASSES");

class Animal {
  // Access modifiers: public, private, protected

  public name: string; // the default modifier is public (meaning if it is not written the property is public property)
  lovesChese: boolean; // is public property =)

  private age: number;

  protected type: string = "Animal";

  constructor(animalName: string, loveCheese: boolean, age: number) {
    this.name = animalName;
    this.lovesChese = loveCheese;
    this.age = age;
  }

  customAgeGetter() {
    return this.age;
  }

  customAgeSetter(age: number) {
    this.age = age;
  }

  // Getters & Setters
  // getter
  get animalAge(): number {
    return this.age;
  }

  // setter
  set animalAge(age: number) {
    console.log("accesing the setter");
    if (age <= 0) {
      console.error("Age cannot be negative");
    } else {
      this.age = age;
    }
  }
}

// new instance of the class
const animal = new Animal("Batman", true, 2);
console.log(animal);
console.log(animal.name); // accessing the public property name
console.log(animal.lovesChese); // accesing the public property lovesCheese

// console.log(animal.age); // will throw error. We cannot access private properties outside of the class
console.log(animal.customAgeGetter()); // 2
console.log(animal.animalAge); // accesing the getter
animal.animalAge = 5; // accesing the setter
console.log(animal.animalAge); // accessing the getter

// console.log(animal.type); // will throw error. We cannot access protected properties outside of the class
// new instance of the class
const animalSecond = new Animal("Milka", false, 5);

separator("INHERITANCE");

class Dog extends Animal {
  breed: string;

  constructor(
    dogName: string,
    dogAge: number,
    dogBreed: string,
    doglovesCheese: boolean = true
  ) {
    console.log(
      "I am method and I am invoked whenever a new instance is created"
    );
    super(dogName, doglovesCheese, dogAge);
    this.type = "Dog"; // in subclasses we can modify the protected property
    // this.age = 23; // we cannot modify the private properties in subclasses

    this.breed = dogBreed;
  }

  speak(): void {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Bubi", 7, "Labrador");
console.log(dog);
console.log(dog.animalAge);
dog.speak();

separator("STATIC PROPERTIES");

// We can access the static methods/properties if we extend from the class =)
class MyMapper {
  static entity = "My Mapper";

  // READONLY => we assign value only when initialization of the property
  // we cannot re-assign the value
  private readonly entityIdentifier = "some_key_value";

  static listEntities(entities: string[]) {
    entities.forEach((entity) => console.log(entity));
  }

  printEntity(entityName: string) {
    console.log(`entity is: ${entityName}...`);
  }

  get entityID() {
    return this.entityIdentifier;
  }

  set entityID(value: string) {
    // this.entityIdentifier = value;  // error: we cannot set/assign value to READONLY property
  }
}

MyMapper.listEntities(["entity one", "entity two"]); // we can access the static methods only from the class itself
console.log(MyMapper.entity);

// MyMapper.printEntity('my entity') // we cannot access non static methods though the class

const mapper = new MyMapper();
mapper.printEntity("USER_ENTITY");
console.log(mapper.entityID);
// mapper.listEntities(['One', 'Two']) // we cannot access static methods from the instance

separator("ABSTRACT CLASSES");

// We cannot create instances out of abstract class
// we only can extend them
abstract class Vehicle {
  wheels: number;
  abstract color: string;
  constructor(wheelsOfVehicle: number) {
    this.wheels = wheelsOfVehicle;
  }
}

// const vehicle = new Vehicle() //Error:  Cannot create an instance of an abstract class

// we can only extends abstract classes
class Car extends Vehicle {
  // wheels: number = 4;
  color: string;
  constructor(carColor: string) {
    super(4); // providing value of the parameter wheelsOfVehicle of parent class
    this.color = carColor;
  }
}

const ladaNiva = new Car("red");
console.log(ladaNiva);
console.log(ladaNiva.wheels);

// Usecase for abstract

abstract class Entity {
  abstract id: string;
}

class UserEntity extends Entity {
  id: string;
  /**
   *  some other properties related to UserEntity
   */

  constructor(idValue: string) {
    super();
    this.id = idValue;
  }
}

class ProductEntity extends Entity {
  id: string;

  constructor(idValue: string) {
    super();
    this.id = idValue;
  }
}

separator("INTERFACES");

interface PaymentProcessor {
  paymentType: string;
  process: (amount: number) => void;
}

class CreditCardPayment implements PaymentProcessor {
  paymentType: string;

  constructor() {
    this.paymentType = "CREDID_CARD";
  }

  process(amount: number) {
    console.log(
      `The payment process is with ${this.paymentType} and amount is: ${amount}`
    );
  }
}

const payment = new CreditCardPayment();
payment.process(2000);

separator("TYPE CASTING");

interface Product {
  name: string;
  price: number;
  details: () => string;
}

// hey I know what I am doing
const bananas: Product = {} as Product; // w/o assetion (type casting)
console.log(bananas);

const bread: Product = {
  name: "Homemade bread",
  price: 40,
  details: function () {
    console.log("**** THIS", this);
    return `The product name is ${this.name} and price: ${this.price}`;
  },
};

console.log(bread);

class Store {
  private products: Product[];

  constructor() {
    this.products = [];
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  readProducts() {
    return this.products;
  }
}

const myStore = new Store();
myStore.addProduct(bread);

const allProducts = myStore.readProducts();
console.log(allProducts);

const firstProduct = allProducts[0];

console.log(firstProduct.details());
