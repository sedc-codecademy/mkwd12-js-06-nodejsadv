# Cars CRUD Homework

## Overview

In this homework, you will develop a basic CRUD (Create, Read, Update, Delete) application using NestJS. This application will manage a list of cars. Each car will have the following properties:

- id: number
- make: string
- model: string
- year: number

## Requirements

- Node.js
- NestJS CLI
- A REST client (Postman or similar) or curl

## Setup

1. Install Node.js from [https://nodejs.org/](https://nodejs.org/)
2. Install NestJS CLI by running `npm i -g @nestjs/cli`
3. Create a new NestJS project by running `nest new cars-crud -g`
4. Navigate into your project directory `cd cars-crud`

## Tasks

### Task 1: Model Creation

Create a Car interface in the `src/cars/car.interface.ts` file with the properties mentioned above.

### Task 2: Create a Cars Service

In the `src/cars/cars.service.ts`, implement methods for:

- Adding a new car
- Retrieving all cars
- Retrieving a single car by id
- Updating a car by id
- Deleting a car by id

### Task 3: Create a Cars Controller

Create a controller in `src/cars/cars.controller.ts` that will handle the HTTP requests:

- POST `/cars` for creating a new car
- GET `/cars` for retrieving all cars
- GET `/cars/:id` for retrieving a car by id
- PATCH `/cars/:id` for updating a car by id
- DELETE `/cars/:id` for deleting a car by id

### Task 4: Custom Status Code on POST

Investigate and implement returning a custom status code (without using @Res()) when a new car is successfully created with POST `/cars`. For example, return a `201 Created` status.

## Bonus

As a bonus, add validation using DTOs to the Car model to ensure that all inputs are correct before saving a car (e.g., year is a four-digit number).

## Submission

Push your code to a new GitHub repository and submit the repository link.

Good luck!
