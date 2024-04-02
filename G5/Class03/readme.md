# Simple Example API with Node.js, Express, and Mongoose

## Introduction to MongoDB

**MongoDB** is a NoSQL database that provides high performance, high availability, and easy scalability. MongoDB works on the concept of collections and documents. Unlike relational databases, which use tables and rows, MongoDB is document-oriented. This means it stores data in JSON-like documents with dynamic schemas, making the integration of data in certain types of applications easier and faster.

## What is Mongoose?

**Mongoose** is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks, and more, out of the box. Mongoose offers a more structured and schema-based approach to model data in MongoDB, which can help manage data integrity and application logic directly in the database layer.

## Understanding Mongoose Schemas

A **schema** in Mongoose defines the structure of the document, default values, validators, etc., similar to how a table is defined in a relational database. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection. Schemas are used to define the fields stored in each document along with their validation requirements and default values.

Mongoose schemas do not just define the structure of the data, but also the methods (instance methods, static methods) that can be used on the model derived from the schema. This allows for a more integrated way to work with data abstraction, ensuring that all documents of a collection have a specified format and behavior.

This provides a practical example of how to integrate MongoDB operations into a Node.js and Express application using Mongoose.

### Defining a Mongoose Model

A `Dummy` model was defined to demonstrate how to create and interact with documents in a MongoDB collection using Mongoose. This model includes fields for `name`, `content`, and `createdAt`, showcasing basic data types and default values in Mongoose schemas.

Create a new file `models/Dummy.js` to define a simple Mongoose model.

```javascript
// models/Dummy.js
import mongoose from "mongoose";

const dummySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
  },
});

const Dummy = mongoose.model("Dummy", dummySchema);

export default Dummy;
```

### Implementing Routes for Database Interaction

Two routes were added to the application:

- **POST `/create`**: Creates a new document in the `dummies` collection based on the provided data.
- **GET `/dummies`**: Retrieves all documents from the `dummies` collection, demonstrating how to perform a basic query.

```javascript
// app.js
import express from "express";
import connectDB from "./db.js";
import Dummy from "./models/Dummy.js";

const app = express();

app.use(express.json());

// Route for creating a new document
app.post("/create", async (req, res) => {
  try {
    const { name, content } = req.body;
    const newDummy = new Dummy({ name, content, createdAt: Date.now() });
    await newDummy.save();
    res.status(201).json(newDummy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route for retrieving all documents
app.get("/dummies", async (req, res) => {
  try {
    const dummies = await Dummy.find();
    res.status(200).json(dummies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`)}
  await connectDB(); // Establish database connection
  );
```

## Testing the API

To test the API:

1. Use a tool like Postman or cURL to send a POST request to `/create` with a JSON body containing `name` and `content` fields.
2. Send a GET request to `/dummies` to retrieve all documents.

Example POST request body:

```json
{
  "name": "Sample Document",
  "content": "This is just a sample."
}
```
