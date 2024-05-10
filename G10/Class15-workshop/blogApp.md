# Workshop: Building a Feature-Rich Blogging Platform API with Nest.js and Entity Relationships

## Objective

Welcome to an exciting workshop where we'll build a robust API for a dynamic blogging platform using Nest.js. Over the course of this workshop, we'll explore different aspects of Nest.js, such as managing relationships between entities, setting up authentication systems, and implementing advanced features like post scheduling. By the end of our journey together, you'll have a deep understanding of Nest.js basics, empowering you to create complex APIs with confidence. Let's get started on this adventure!

## Configuration

1. **Initiate a new Nest.js project named BLOGGING-PLATFORM:**
   - Globally install Nest.js: `npm install -g @nestjs/cli`
   - Generate a new Nest.js project: `nest new BLOGGING-PLATFORM`
2. **Install and configure TypeORM:**
   - Install TypeORM and PostgreSQL driver: `npm install @nestjs/typeorm typeorm pg`
3. **Install all the relevant libraries like class-validator and class-transformer**

## Entities

1. **Create post.entity.ts:**
   - Define attributes like id, title, content, category, createdAt, and updatedAt.
2. **Create userProfile.entity.ts:**
   - Define attributes like id, firstName, lastName and age.
   - Establish a one-to-many relationship with Post entity.
3. **Create user.entity.ts:**
   - Define attributes like id, email, password and role.
   - Establish a one-to-one relationship with the User entity.
   - Ensure that deleting a user cascades to delete associated posts.
4. **Create comment.entity.ts:**
   - Define attributes like id, content, createdAt, and updatedAt.
   - Establish many-to-one relationship with Post and UserProfile entities.
   - Ensure that deleting a post cascades to delete associated comments.

   * Annotate the entities with `@Entity()` decorator and also the properties with appropriate decorators.

## Modules, Controllers, and Services

1. **Create posts.module.ts, posts.controller.ts, and posts.service.ts:**
   - Define a module for posts.
   - Implement CRUD operations for posts in the controller and service.
2. **Create userProfile.module.ts, userProfile.controller.ts, and userProfile.service.ts:**
   - Define a module for userProfile.
   - Implement CRUD operations for userProfiles in the controller and service.
3. **Establish comments.module.ts, comments.controller.ts, and comments.service.ts:**
   - Define a module for comments.
   - Implement CRUD operations for comments in the controller and service.

## Query Filters

- **Custom Queries for Specific Data Retrieval:**
  - Implement custom queries to retrieve posts by category, users by role, and comments by post ID from the database.

## Documentation

1. **Document API Endpoints:**
   - Utilize tools like Swagger to generate API documentation.
   - Utilize tools like Postman to test your endpoints.
   - Document endpoints, request parameters, and response structures for user reference.

## Bonus: Authentication

- **Implement Passport.js:**
  - Utilize Passport.js for authentication.
  - Implement strategies for JWT token authentication and local authentication.
- **JWT Authentication:**
  - Use JSON Web Tokens (JWT) for secure authentication.
  - Generate tokens upon successful login and include them in subsequent requests for user authentication.
- **Login and Registration Functions:**
  - Implement functions for user login and registration.
  - Ensure proper validation and handling of login credentials.
- **Role-based Access Control:**
  - Define roles such as "admin" and "user" in the user entity, assigning appropriate roles during registration.
  - Specify in the API documentation that only users with the role "admin" should be able to create and modify posts.
  - Ensure that only "admin" users have access to admin-specific endpoints.
  - Clearly document in the code and API documentation the role-based access control for these endpoints.

By treating authentication as a bonus feature, you can enhance the security and flexibility of your blogging platform API, providing users with a seamless and secure experience.

> Stay curious, stay inspired, and remember that every challenge is an opportunity to learn and grow. Enjoy the process and have fun bringing your ideas to life! Happy coding! 🚀
