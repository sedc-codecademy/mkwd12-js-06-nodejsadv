## Project Setup:

- Initialize a new Node.js project.
- Install the necessary dependencies (Express, MongoDB driver, etc.).

  - **MongoDB Connection:**

    - Establish a connection to your MongoDB database.
    - Use the official MongoDB Node.js driver (mongodb package).

  - **Express Application Setup:**

    - Create an Express application.
    - Set up relevant middleware for cors and parsing JSON data.
    - Define your server port (e.g., 3000).

  - **Create a Model:**

    - Define a simple data model for a “Book” model.
    - Specify the fields for your data: title, author, publishingYear, rating, genre.

  - **Implement CRUD operations in the model:**

    - Implement the following CRUD operations:
    - Create: Add a new book to the database.
    - Read: Retrieve a list of all books and a specific book by ID.
    - Update: Modify book details.
    - Delete: Remove a book from the database.
    - **Bonus:** Implement a logic to get a book by the field "author"
    - **Bonus vol.2:** Implement a logic to delete all books in the DB

  - **Routes and Controllers:**

    - Create route handlers (controllers) for each CRUD operation.
    - Define routes for creating, reading, updating, and deleting books.

  - **Testing:**
    - Use tools like Postman to test your API endpoints.
    - Verify that you can create, retrieve, update, and delete books.

* Don't forget to send your postman collection
* Dont forget to upload your .env file with the relevant credentials in the email so that we can test the routes

* Remember, this is a minimal setup to get you started. You can expand upon this foundation by adding more features, error handling, and validation as needed. Happy coding! 🚀
