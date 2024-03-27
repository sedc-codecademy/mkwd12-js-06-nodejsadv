import { Router } from "express";
import { getDatabase } from "../db/mongo-connection.js";
import { ObjectId } from "mongodb";
import productsValidationSchema from "../validators/products.schema-validator.js";

const productsRouter = Router();

// CREATE NEW PRODUCT
productsRouter.post("/product", async (req, res) => {
  try {
    const requestBody = req.body;
    // if validation fails we gonna enter the catch block =)
    await productsValidationSchema.validateAsync(requestBody);

    // Entity
    const product = {
      name: requestBody.name,
      price: requestBody.price,
      origin: requestBody.origin,
    };

    // get database instance
    const db = getDatabase();

    // get instance of the collection products
    const productsCollection = db.collection("products");

    // insertOne is predefined method from mongo db. we access it though the collection (productsCollection)
    const productCreated = await productsCollection.insertOne(product);
    console.log(productCreated);

    res.status(201).send({
      message: "Product has been created.",
      id: productCreated.insertedId,
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// GET ALL PRODUCTS
productsRouter.get("/product", async (req, res) => {
  // get database instance
  const db = getDatabase();

  // get instance of the collection products
  const productsCollection = db.collection("products");

  // .find is predifed method from mongo db. it will return the whole war collection document
  const rawDocument = await productsCollection.find();

  // .toArray is predifined will extract the data from the raw document
  const products = await rawDocument.toArray();

  console.log(products);

  res.send(products);
});

// FIND BY ID
productsRouter.get("/product/:id", async (req, res) => {
  const productId = req.params.id;

  // get database instance
  const db = getDatabase();

  // get instance of the collection products
  const productsCollection = db.collection("products");

  // read product
  const product = await productsCollection.findOne({
    // ObjectId comes from mongodb, and we use always when we
    // provide id as value.
    _id: new ObjectId(productId),
  });

  if (!product) {
    return res
      .status(404)
      .send({ message: `Product with id: ${productId} not found` });
  }

  console.log(product);
  res.send(product);
});

// DELETE BY ID
productsRouter.delete("/product/:id", async (req, res) => {
  const productId = req.params.id;

  // get database instance
  const db = getDatabase();

  // get instance of the collection products
  const productsCollection = db.collection("products");

  const result = await productsCollection.deleteOne({
    _id: new ObjectId(productId),
  });

  if (result.deletedCount === 0) {
    return res
      .status(404)
      .send({ message: `Product with id ${productId} was not found` });
  }

  console.log("result from delete", result);

  res.send({ message: "Product was deleted" });
});

export default productsRouter;
