import "dotenv/config";
import { MongoClient, ObjectId } from "mongodb";

const MONGO_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

console.log(MONGO_URI);

const client = new MongoClient(MONGO_URI);

const run = async () => {
  try {
    // First we ping the databse to see if the connection URI is good and the databse is up
    await client.db().command({ ping: 1 });

    console.log("Connected to MongoDB");

    //This is the databse we created "adv-node-products"
    const database = client.db();

    //This is the products collection
    const productsCollection = database.collection("products");

    // const productsCursor = productsCollection.find({});
    // const productsData = await productsCursor.toArray();

    const productsData = await productsCollection.find().toArray();

    const foundProduct = await productsCollection.findOne({
      _id: new ObjectId("6605a3f68ba6dd4bf02d3556"),
    });

    console.log("Found Product", foundProduct);

    console.log(productsData);
  } catch (error) {
    console.log(error);
  }
};

run();
