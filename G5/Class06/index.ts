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

  static listEntities(entities: string[]) {
    entities.forEach((entity) => console.log(entity));
  }

  printEntity(entityName: string) {
    console.log(`entity is: ${entityName}...`);
  }
}

MyMapper.listEntities(["entity one", "entity two"]); // we can access the static methods only from the class itself
console.log(MyMapper.entity);

// MyMapper.printEntity('my entity') // we cannot access non static methods though the class

const mapper = new MyMapper();
mapper.printEntity("USER_ENTITY");

// mapper.listEntities(['One', 'Two']) // we cannot access static methods from the instance
