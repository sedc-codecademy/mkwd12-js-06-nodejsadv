import Router from "express";
import { productMongoModel } from "../schemas/product.schema.js";

const productsRouter = Router();

// CREATE PRODUCT
productsRouter.post("/products", async (req, res) => {
  // 1. Read the request body
  const { name, description, price } = req.body;

  // 2. Create literal object that is product
  // entity product
  const productBody = {
    name,
    description,
    price,
  };

  // 3. Create the record that we are about to save into mongo atlas
  // this record will (MUST) RESPECT the schema

  try {
    const product = new productMongoModel(productBody);
    // 4. We save the mogno product record  into mongo atlas
    const response = await product.save();
    console.log("response", response);
    res.status(201).send({ message: "cretead", id: response._id });
  } catch (error) {
    res.send({ message: error.message });
  }
});

// GEL ALL PRODUCTS
productsRouter.get("/products", async (req, res) => {
  // productMongoModel we use it to interact with mongo atlas
  const products = await productMongoModel.find();

  res.send(products);
});

// GET BY ID
productsRouter.get("/products/:id", async (req, res) => {
  const productId = req.params.id;

  // findById will return the record or if it is not found it returns null
  const product = await productMongoModel.findById(productId);

  if (!product) {
    return res
      .status(404)
      .send({ message: `Product with id: ${productId} not found.` });
  }

  res.send(product);
});

// DELETE BY ID
productsRouter.delete("/products/:id", async (req, res) => {
  const productId = req.params.id;

  //findByIdAndDelete will return the deleted object, but if it is not found
  // it will return null
  const response = await productMongoModel.findByIdAndDelete(productId);
  console.log(response);

  if (!response) {
    return res
      .status(404)
      .send({ message: `Product with id: ${productId} not found.` });
  }
  res.send({ message: "Success delete" });
});

// UPDATE BY ID
productsRouter.put("/products/:id", async (req, res) => {
  const productId = req.params.id;

  const { name, description, price } = req.body;

  const productUpdated = {
    name,
    description,
    price,
  };

  //findByIdAndUpdate will return the updated object or if it is not FOUND
  // will return null
  const response = await productMongoModel.findByIdAndUpdate(
    productId,
    productUpdated
  );
  console.log(response);
  if (!response) {
    return res
      .status(404)
      .send({ message: `Product with id: ${productId} not found.` });
  }
  res.send({ message: "Success update" });
});

export default productsRouter;
