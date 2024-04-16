# Cars CRUD Homework

## Part 1: Basic NestJS CRUD Application

### Overview

In this section, you will develop a basic CRUD (Create, Read, Update, Delete) application using NestJS. This application will manage a list of cars. Each car will have the following properties:

- **id**: number
- **make**: string
- **model**: string
- **year**: number

### Requirements

- Node.js
- NestJS CLI
- A REST client (Postman or similar) or curl

### Setup

1. Install Node.js from [https://nodejs.org/](https://nodejs.org/)
2. Install NestJS CLI by running `npm i -g @nestjs/cli`
3. Create a new NestJS project by running `nest new cars-crud`
4. Navigate into your project directory by entering `cd cars-crud` in your terminal

### Tasks

#### Task 1: Model Creation

Create a Car interface in the `src/cars/car.interface.ts` file with the properties mentioned above.

#### Task 2: Create a Cars Service

In the `src/cars/cars.service.ts`, implement methods for:

- Adding a new car
- Retrieving all cars
- Retrieving a single car by id
- Updating a car by id
- Deleting a car by id

#### Task 3: Create a Cars Controller

Create a controller in `src/cars/cars.controller.ts` that will handle the HTTP requests:

- `POST /cars` for creating a new car
- `GET /cars` for retrieving all cars
- `GET /cars/:id` for retrieving a car by id
- `PATCH /cars/:id` for updating a car by id
- `DELETE /cars/:id` for deleting a car by id

#### Task 4: Custom Status Code on POST

Investigate and implement returning a custom status code (without using @Res()) when a new car is successfully created with `POST /cars`. For example, return a `201 Created` status.

### Bonus

As a bonus, add validation using DTOs to the Car model to ensure that all inputs are correct before saving a car (e.g., year is a four-digit number).

### Submission

Push your code to a new GitHub repository and submit the repository link.

Good luck!

## Part 2: Database Integration using TypeORM

### Overview

In this section, you will extend your application to use a PostgreSQL database. You will set up TypeORM within your NestJS project to manage database operations.

### Requirements

- PostgreSQL
- TypeORM

### Setup

1. Install PostgreSQL and ensure it is running on your local machine.
2. Add TypeORM and PostgreSQL driver to your project by running `npm install @nestjs/typeorm typeorm pg`

### Tasks

#### Task 1: Configure TypeORM

Configure TypeORM in your NestJS application.

#### Task 2: Create a Car Entity

Transform your Car interface into a Car entity using TypeORM annotations to map the object properties to your PostgreSQL database columns.

#### Task 3: Update the Cars Service

Refactor your Cars Service to perform CRUD operations using the TypeORM repository instead of managing an in-memory array.

#### Task 4: Create filters

Add filters to the Cars Controller to allow searching for cars by year, make, or model.

#### Task 5: Verify Integration

Test all endpoints to ensure they interact correctly with the database. Make sure each operation (Create, Read, Update, Delete) performs as expected.

### Submission

Update your GitHub repository with the new code incorporating database integration and submit the updated link.

Best of luck!
