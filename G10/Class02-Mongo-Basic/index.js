import "dotenv/config";
import express from "express";
import { connectToDatabase, getDb } from "./db/mongo-connection.js";
import { ObjectId } from "mongodb";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

const getProductsCol = () => getDb().collection("products");

app.get("/products", async (req, res) => {
  try {
    const productsCollection = getProductsCol();

    const products = await productsCollection.find({}).toArray();

    return res.status(200).send(products);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: error.message });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const productsCollection = getProductsCol();

    const foundProduct = await productsCollection.findOne({
      _id: new ObjectId(req.params.id),
    });

    if (!foundProduct) throw new Error();

    return res.send(foundProduct);
  } catch (error) {
    console.log(error);
    return res.status(404).send({ msg: "Product Not Found!" });
  }
});

app.post("/products", async (req, res) => {
  try {
    const productsCollection = getProductsCol();
    const productData = req.body;

    const response = await productsCollection.insertOne(productData);

    console.log("insertOne response", response);

    return res.status(201).send({ msg: "Product created" });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ msg: error.message });
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const productsCollection = getProductsCol();

    const response = await productsCollection.findOneAndReplace(
      { _id: new ObjectId(req.params.id) },
      { ...req.body },
      // Return document after returns the document after it has been updated while if we don't include this the document that will be returned will be the original that was found by the filter
      { returnDocument: "after" }
    );

    console.log("replace response", response);

    if (!response) throw new Error("Invalid Update Data");

    return res.json(response);
  } catch (error) {
    return res.status(400).send({ msg: error.message });
  }
});

app.patch("/products/:id", async (req, res) => {
  try {
    const productsCollection = getProductsCol();

    const response = await productsCollection.findOneAndUpdate(
      // Exact same functionality as findOne, it searches the collection and then finds a document or returns null if a document can't be found
      {
        _id: new ObjectId(req.params.id),
      },
      {
        // $set key when given an object of properties of the document will update only the ones contained in the object, useful for patch and for partial updates
        $set: req.body,
      },
      { returnDocument: "after" }
    );

    console.log("update response", response);

    if (!response) throw new Error("Invalid Update Data");

    return res.json(response);
  } catch (error) {
    return res.status(400).send({ msg: error.message });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const productsCollection = getProductsCol();

    const response = await productsCollection.deleteOne({
      _id: new ObjectId(req.params.id),
    });

    console.log("delete response", response);

    if (!response.deletedCount)
      throw new Error("Can't delete product! Product not found!");

    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).send({ msg: error.message });
  }
});

app.listen(PORT, HOST, () => {
  connectToDatabase();
  console.log(`Server is up at port: ${PORT}`);
});
