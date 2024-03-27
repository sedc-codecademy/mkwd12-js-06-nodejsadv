import { MongoClient } from 'mongodb';

const MONGO_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.${process.env.MONGO_DB_CODE}.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

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

export function getDb() {
	if (!connection) return;

	return connection.db();
}
