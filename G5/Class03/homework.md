# E-Recipe Application Requirements

## Overview

Create an application to store, retrieve, delete, and edit recipes. The application should allow users to interact with recipes through a series of defined routes.

## Recipe Object Properties

Each recipe object should contain the following properties:

- `recipeName`: string - The name of the dish.
- `description`: string - A brief overview of the dish, including its origins, flavor profile, or any other interesting information.
- `cookingDuration`: string - The total time needed to prepare and cook the dish.
- `ingredients`: array of strings - A list of ingredients required for the dish.
- `servings`: number - The number of servings the recipe yields.
- `difficulty`: string - The difficulty level of the recipe (`easy`, `medium`, `hard`).
- `cuisine`: string - The cuisine category the dish belongs to (e.g., `Chinese`, `Mexican`, `Italian`).

### Sample Recipe Object

```json
{
  "recipeName": "Sarma (stuffed cabbage rolls)",
  "description": "Very delicious traditional Macedonian meal.",
  "cookingDuration": "4 hours",
  "ingredients": ["minced meat", "cabbage", "salt", "pepper", "rice", "water"],
  "servings": 4,
  "difficulty": "HARD",
  "cuisine": "Macedonian"
}
```

## Tech Stack

- **Backend Framework**: Node.js with Express
- **Database**: MongoDB with Mongoose
- **Database Name**: `recipe-db`
- **Collection Name**: `recipes`

## Routes

- **CREATE RECIPE**: Add a new recipe to the database.
- **GET ALL RECIPES**: Retrieve a list of all recipes.
- **GET RECIPE BY ID**: Retrieve a specific recipe by its ID.
- **DELETE RECIPE BY ID**: Remove a specific recipe from the database by its ID.
- **EDIT RECIPE BY ID**: Update the details of a specific recipe by its ID.

## Additional Information

- For those unable to create their MongoDB cluster, a cluster has been set up with the database name `recipe-db` and the collection name `recipes`. The connection string provided during the class session can be used for this purpose.
