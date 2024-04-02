# Workshop pt.1

## E-Commerce app

E-Commerce is rocking both on the web and mobile and we can’t ignore the massive size of this industry. Knowing how to build and maintain e-commerce apps is going to help you a lot as a developer.

Key requirements and features:

**Product Management:**

- Product Model: Define a schema for products including fields like name, description, price, quantity, reviews, rating and category.
- CRUD Operations: Implement CRUD operation (get all products, get product by id, create product, update product, delete product) for managing products in the database.
- Search Functionality: Enable search functionality to allow users to find products based category(mandatory) and name.
  - You can implement search functionality via query params or by creating a separate route (post request) where you will send the search valuse in the body
- Product Reviews: Implement a system for users to leave reviews and ratings for products.

**Cart Management**

- Shopping Cart Model: Define a schema for the shopping cart to store items. The shopping cart should have a field "products" that will be of type array and will contain the id's of the products added to cart.
- Add to Cart: Implement functionality to add products to the shopping cart.
- Get cart by id
- Get all carts

Feel free to experiment and add additional features

### Libraries and Tools:

- Express.js: Use Express.js for building the backend server and handling HTTP requests.
- MongoDB Atlas: Host your MongoDB database on the cloud for scalability and reliability.
- Mongoose: Use Mongoose for modeling and interacting with MongoDB data in Node.js.

* Feel free to add additional libraries that you consider useful
