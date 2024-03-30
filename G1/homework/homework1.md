# Homework 1 - Mongoose Connection

### Deadline: 14.04.2024

## Basic Requirement

Let's improve our simple social media API with using proper database for storing data. We are going to use Mongo DB with Mongoose to store our data.

To be able to complete this homework you will need to have the [previous one](https://github.com/sedc-codecademy/mkwd12-js-05-nodejs-basic/blob/main/G1/homework/homework4.md) done. If you haven't done it yet, please do it first, as connecting to a database makes sense only if we have some logic and endpoints before the connection.

### Database Connection

1. Install mongoose package with npm like we did in class, follow the instructions in the readmes or the code example from class.
2. Create a connection to the database **you have created**.
3. Use .env file to store the elements of the connection string.
4. Use the following structure fot the .env file:
   ```env
   MONGO_USER=your_mongo_user
   MONGO_PASSWORD=your_mongo_password
   MONGO_CLUSTER=your_mongo_cluster
   MONGO_DB_CODE=your_mongo_db_code
   MONGO_DB_NAME=your_mongo_db_name
   ```
5. No need to send us the .env file, just make sure you have it in your project.
6. While checking your homework we will use our own .env file to test the connection with our own database. That is why we just need the same variable names to speed up the process.
7. You are free to structure the models in the DB as you see fit.
8. Make sure all the data from the previous homework is stored in the database, it's fetched from the database and the endpoints are working as expected.

## Before you send it...

- Don't forget to test your api with Postman.
- Don't forget to add a .gitignore file to your project and add /node_modules to it.
- Don't forget to add a .env.example file to your project where we can see that the proper variable names are used.
- Don't forget to send the postman collection with your homework! (instructions on how to do this in the root instructions.md file)
