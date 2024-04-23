# New requirements regarding the last homework real estate management:

## Global Validation:

- Implement GlobalPipe for validation: Use ValidationPipe to validate incoming requests in your application. This can be set up globally for your app in the main.ts file.

## Swagger:

- Implement Swagger: Swagger can be used to design, build, document, and consume RESTful web services. It can also help you test your endpoints directly from the UI.
- Install the required packages: npm install @nestjs/swagger.
  Set up Swagger in your main.ts file and configure it in a way that every controller and route is documented.

## Entities:

- Create a new entity for a one-to-one relationship: For example, you could create a Profile entity that has a one-to-one relationship with the Agent entity. Each agent could have a profile with additional information like id, years of experience, specialties, etc.

- Actually, you need to create a new entity Profile with properties like id, yearsOfExperience, specialties, and agentId.

- Establish a one-to-one relationship with the Agent entity.

## Modules, Controllers, and Services:

- Create profiles.module.ts, profiles.controller.ts, and profiles.service.ts:
- Define a module for profiles.
- Implement CRUD operations for profiles in the controller and service.

## Bonus

- Implement searching properties via query params by type and location
- Implement searching agents via query params by name and agency

Remember to update your project requirements and documentation to reflect these changes. Good luck, guys! 🚀

> `AND DO NOT FORGET: In database relationships, the owner of the  relationship is always the entity that holds the foreign key.`
