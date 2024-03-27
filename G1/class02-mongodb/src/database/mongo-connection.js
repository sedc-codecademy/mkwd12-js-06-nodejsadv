import { MongoClient } from 'mongodb';

const MONGO_URI = `mongodb+srv://novivo:<password>@cluster0.3y9yiup.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(MONGO_URI);

let connection;

export async function connectToDatabase() {
	try {
		connection = await client.connect();
		console.log('Successfully connected to Mongo DB!');
	} catch (error) {
		console.error('Error while connecting to database.', { error });
	}
}
