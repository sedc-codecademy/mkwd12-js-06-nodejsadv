//Always import at the start of the main server file to ensure that environment variables are loaded properly
import 'dotenv/config';
import express from 'express';
import { globalRouter } from './src/const/router.const.js';
import { connectToDatabase } from './src/database/mongo-connection.js';

// const PORT = process.env.PORT || 3000;
// const HOST = process.env.HOST || "0.0.0.0";

const app = express();
app.use(express.json());

app.use('/api', globalRouter);

app.listen(process.env.PORT, process.env.HOST, async () => {
	await connectToDatabase();
	console.log(
		`The server is up at port: ${process.env.PORT} and on host: ${process.env.HOST}`
	);
});
