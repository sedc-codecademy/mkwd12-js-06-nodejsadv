# TypeScript Guide

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

- To create tsconfig.json file, you should run the command `tsc --init` and will create tsconfig.json file with the detault values. Values which are TS rules for our project
- To run the ts file you can run the command `ts-node [name-of-file].ts`
- To run the ts file in watch mode you can run the command `ts-node-dev --respawn [name-of-file].ts`

## Table of Contents

- [Basic Types](#basic-types)
- [Interfaces](#interfaces)
- [Types](#types)
- [Assertion](#assertion)
- [Type Inference](#type-inference)
- [Return Types of Functions](#return-types-of-functions)
- [Classes](#classes)
- [Access Modifiers](#access-modifiers)
- [Abstract Classes](#abstract-classes)
- [Static Methods](#static-methods)
- [Implement Interface](#implementing-interface)

## Basic Types

TypeScript provides several basic types including `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `void`.

```typescript
let id: number = 5;
let company: string = "Acme Corp";
let isPublished: boolean = true;
```

## Interfaces

Interfaces in TypeScript are used to define the structure of an object.

```typescript
interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "John Doe",
};
```

## Types

The `type` keyword can be used to define a type that can be reused.

```typescript
type Point = {
  x: number;
  y: number;
};

const point: Point = {
  x: 10,
  y: 20,
};
```

## Assertion

Type assertions are a way to tell the compiler "trust me, I know what I'm doing."

```typescript
interface Car {
  engine: string;
  color: string;
  consumtion: number;
}

let myCar: Car = {} as Car;
```

## Type Inference

TypeScript can infer the type of a variable if it is initialized.

```typescript
let productId = 5; // TypeScript infers the `productId` is of type number
```

## Return Types of Functions

TypeScript can specify and infer the return type of functions.

```typescript
function add(x: number, y: number): number {
  return x + y;
}
```

## Classes

Classes are a fundamental part of TypeScript which supports OOP concepts like inheritance.

```typescript
class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
```

## Access Modifiers

TypeScript supports `public`, `private`, and `protected` modifiers to control access to the members of a class.

```typescript
class Employee {
  private id: number;
  protected name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
```

## Abstract Classes

Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly.

```typescript
abstract class Vehicle {
  abstract engine: string; // Must be implemented by derived classes
  abstract move(): void; // Must be implemented by derived classes
}
```

## Static Methods

Static methods are called on the class itself and not on instances of the class.

```typescript
class MathUtility {
  static add(x: number, y: number): number {
    return x + y;
  }
}

MathUtility.add(2, 4); // invoking the static method through the class
```

## Implementing interface

A class can implement interface, meaning it should respect and have the same structure as the interface

```typescript
interface Home {
  id: string;
  type: string;
  address: string;
}

class Aparament implements Home {
  id: string;
  type: string;
  address: string;

  construcor(
    apartamentId: string,
    apartamentType: string,
    apartamentAddress: string
  ) {
    this.id = apartamentId;
    this.apartamentType = apartamentType;
    this.apartamentAddress = apartamentAddress;
  }
}
```
