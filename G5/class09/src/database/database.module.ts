import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// TypeORM is an Object-Relational Mapping (ORM) library for TypeScript and JavaScript. It is primarily used in Node.js applications to simplify database interactions and facilitate the mapping between objects in code and tables in a relational database.
// Object-Relational Mapping: TypeORM enables developers to define entity classes that represent database tables. These entity classes encapsulate the structure of the underlying tables and provide a way to interact with them using object-oriented programming principles.

@Module({
    imports: [
        // Inside the imports array, you have TypeOrmModule.forRoot(), which is used to configure and initialize TypeORM within your NestJS application.
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'football_manager',
            entities: [__dirname + '/../**/*.entity{.ts,.js}'], // This path tells typeORM where to look for the entities when creating the tables in our database
            synchronize: true, // The synchronize option is set to true, which tells TypeORM to automatically synchronize your entity schemas with the database schema.
        })
    ],
})

export class DatabaseModule{}