# Assignment: Building a Real Estate Management System with NestJS and TypeORM

## Setup:

1.Set up a new NestJS project named POSTGRES-REALSTATE:

- Install NestJS globally: npm install -g @nestjs/cli
- Create a new NestJS project: nest new POSTGRES-REALSTATE

  2.Install and configure TypeORM:

- Install TypeORM and PostgreSQL driver: npm install @nestjs/typeorm typeorm pg

## Entities:

1.Create property.entity.ts:

- Define properties like id, name, type, price, location, and description.
- Annotate the entity with @Entity() and properties with appropriate decorators.

  2.Create agent.entity.ts:

- Define properties like id, name, email, phoneNumber, and agency.
- Establish a many-to-one relationship with Property entity.
- Ensure that deleting an agent cascades to delete associated properties.

## Modules, Controllers, and Services:

1.Create properties.module.ts, properties.controller.ts, and properties.service.ts:

- Define a module for properties.
- Implement CRUD operations for properties in the controller and service.

  2.Create agents.module.ts, agents.controller.ts, and agents.service.ts:

- Define a module for agents.
- Implement CRUD operations for agents in the controller and service.

## Documentation:

1.Document API endpoints:

- Utilize tools like Postman to generate API documentation.

# Challenging Bonus:

1.Implement property reservations:

- Create a reservation.entity.ts with properties like id, propertyId, customerId, startDate, endDate, and status.
- Implement endpoints to handle property reservations, prevent double booking, and manage reservation status.

Feel free to ask if you need any further assistance!
Good luck with your assignment! 🎬
