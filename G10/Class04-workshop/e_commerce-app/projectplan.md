## Setting Up Project Structure

- Initialize a new Node.js project.

  - Install necessary dependencies: Express.js, Mongo, Mongoose, etc.
  - Set up project directories: models, controllers, routes, database etc.
  - Define Product Schema

- Create product schema and model using Mongoose.
- Include relevant fields in the schema like name, description, price, quantity, reviews, ratings, and category and add additional validations for type, required etc.
- Create service layer that will perform CRUD Operations for Products
- Implement controllers for each CRUD operation.
- Create routes for handling CRUD operations on products.
- Connect routes to respective controllers.

- Implement Search Functionality via:
  - query string OR
  - separate post route for searching products by name and category.
- Implement logic to handle search functionality.

  - Utilize Mongoose queries to search products based on provided parameters.

- Implement Product reviews and ratings
- Add route for adding reviews/ratings to products.
- Implement controller function to handle review/rating submissions.
- Update product model schema to include a field for storing reviews.
- Implement logic to update product ratings and reviews based on submitted data.

- Create cart schema and model using Mongoose.
- Create a shopping cart schema and model using Mongoose.
- Include a field for storing product IDs in the cart.
- Add route for adding products to the shopping cart.
- Implement controller function to handle adding products to the cart.
- Implement controller function to handle getting cart items.
- Implement controller function to handle getting cart items.
- Implement controller function to handle getting all carts.

Use Mongoose models to interact with the MongoDB database.

Test each endpoint using Postman
Don't forget to send your Postman collection
