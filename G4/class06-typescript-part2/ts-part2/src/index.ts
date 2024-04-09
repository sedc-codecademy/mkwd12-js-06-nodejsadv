console.log("Works")

const serialNum: string | number = "1520"

console.log(serialNum.length)
console.log("test")


//First way of typecasting using as
const btnEl = document.querySelector("#btn") as HTMLButtonElement
const inputEl = document.querySelector("#input") as HTMLInputElement
//Second way of typecasting using <>
const anotherInputEl = <HTMLInputElement>document.querySelector("#anotherInput")


console.log(inputEl.value)

btnEl.addEventListener("click", () => {
  console.log("Button clicked")
})

const printValue = (value: string | number) => {
  console.log((value as string).length)
} 

//Generics
// Generics can be used to add extra funcitonalities to existing interfaces by defining generic types which will be defined every single time we want to add a type to an object

const getProducts = async (): Promise<string[]> => {
  return ["shoes", "machines", "books"]
}

const getStock = async (): Promise<number> => {
  return 150;
}

interface Product<T>{
  title: string;
  stock: number;
  metaData: T
}

interface WashingMachineMetaData {
  serialNumber: string;
  capacity: number,
}

interface BlenderMetaData {
  rpm: 10000 | 12000 | 20000
  gears: 5 | 3 | 1
}

const washingMachine: Product<WashingMachineMetaData> = {
  title: "Eurolux T1000",
  stock: 6,
  metaData: {
    serialNumber: "EX123012031023",
    capacity: 102
  }
}

const blender: Product<BlenderMetaData> = {
  title: "Nutri Bullet 9000",
  stock: 189,
  metaData: {
    rpm: 12000,
    gears: 5
  }
}

interface User {
  firstName: string;
  lastName: string;
  age: number
}

const userOne : User  = {
  firstName: "Ivan",
  lastName: "Apostolovski",
  age: 26
}

const updateData: Partial<User> = {
  lastName: "Doe"
}

const dataObj: {[key:string]: string | number} = {}

const dataObjTwo: Record<string, string> = {}

const readUserProperty = (user:User, property: keyof User) => {
  return user[property]

}

console.log(readUserProperty(userOne, "firstName"))
console.log(readUserProperty(userOne, "lastName"))
console.log(readUserProperty(userOne, "age"))
// console.log(readUserProperty(userOne, "city"))

//Tuples
// const userArr: [string, string, number] = ["John", "Doe", 30]