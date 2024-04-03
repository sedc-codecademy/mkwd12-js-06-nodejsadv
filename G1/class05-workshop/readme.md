# Animal Shelter App Workshop

## Overview

This workshop involves building a simple yet functional Express.js application for an animal shelter. You'll focus on backend development, specifically creating an API that interacts with a MongoDB database via Mongoose. The primary goal is to manage animal information efficiently.

## Basic Requirements

### Project Setup

- Initialize a new Node.js project.
- Use Express.js as the server framework.
- Install necessary NPM packages: `express`, `mongoose`, `dotenv`, `nodemon`, and `joi` for data validation. (Feel free to add any other you might need)
- Set up a MongoDB connection using Mongoose. (preferably use ENV)

### Model Definition

Create a Mongoose model for **Animals** with the following schema:

- **Fields**:
  - `name`: String, required
  - `type`: String, required (possible values: Dog, Cat)
  - `breed`: String, required
  - `age`: Number, required, must be positive number
  - `status`: String, required (possible values: Available, Adopted)
  - `description`: String, optional

### API Endpoints

Implement RESTful endpoints for managing animals:

- **GET `/animals`**: Retrieve all animals.
- **POST `/animals`**: Add a new animal
- **GET `/animals/:id`**: Retrieve a single animal by its ID.
- **PUT `/animals/:id`**: Update any animal's information by its ID.
- **DELETE `/animals/:id`**: Remove an animal record by its ID.

### Data Validation

- Use Joi to validate incoming data for the `POST` and `PUT` endpoints to ensure data integrity.
- Use Mongoose schema for data validation before saving data in the database.

## Advanced Requirements (Stretch Goals)

- Implement a second **Adoptions** collection with relevant endpoints.

- **GET /adoptions**: List all adoptions. Include animal information in the response.
- **POST /adoptions**: Record a new adoption. Update the corresponding animal's status to adopted.

## Example Data

### Animals

```json
[
	{
		"name": "Buddy",
		"type": "Dog",
		"breed": "Golden Retriever",
		"age": 3,
		"status": "Available"
	},
	{
		"name": "Whiskers",
		"type": "Cat",
		"breed": "Siamese",
		"age": 2,
		"status": "Adopted"
	},
	{
		"name": "Rex",
		"type": "Dog",
		"breed": "German Shepherd",
		"age": 4,
		"status": "Available"
	}
]
```

### Adoptions (For Advanced Participants)

**Animal in DB with animal as Object ID**

```json
[
	{
		"adopterName": "John Doe",
		"email": "johndoe@example.com",
		"animal": "<Animal_ID_of_Whiskers>",
		"adoptionDate": "2023-04-22"
	},
	{
		"adopterName": "Jane Smith",
		"email": "janesmith@example.com",
		"animal": "<Animal_ID_of_Another_Animal>",
		"adoptionDate": "2023-05-01"
	}
]
```

**Animal returned with populated animal**

```json
{
	"adopterName": "John Doe",
	"email": "johndoe@example.com",
	"animal": {
		"_id": "507f191e810c19729de860ea",
		"name": "Whiskers",
		"type": "Cat",
		"breed": "Siamese",
		"age": 2,
		"status": "Adopted",
		"arrivalDate": "2022-05-20"
	},
	"adoptionDate": "2023-04-22"
}
```

## Submission Instructions

- Push your completed project to GitHub, send us the link to your github repo until 21.00 latest.
- Add postman collection to your repo
- Add .env.example with your variable names in your repo
- Add .gitignore with node_modules and .env ignored

This workshop aims to provide a hands-on experience with Express.js, MongoDB, Mongoose, and Joi, focusing on building a foundational backend for an animal shelter management system.
