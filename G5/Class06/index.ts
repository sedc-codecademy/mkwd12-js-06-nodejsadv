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

  constructor(
    animalName: string,
    loveCheese: boolean,
    age: number,
    type: string
  ) {
    this.name = animalName;
    this.lovesChese = loveCheese;
    this.age = age;
    this.type = type;
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
const animal = new Animal("Batman", true, 2, "Animal Type");
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
const animalSecond = new Animal("Milka", false, 5, "");
