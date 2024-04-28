### Homework Part 3: Adding User Resource and Authentication to the Real Estate System

## User Resource:

    1. Create user.entity.ts:
       - Define attributes such as id, email, password, and role.
       - Annotate the entity with @Entity() and properties with appropriate decorators.

    2. Create users.service.ts:

## Authentication:

1. Create auth resource:

   1. Implement Passport.js:

      - Use Passport.js to implement an authentication mechanism in the application. This library provides us with great flexibility and efficiency in managing authentication.

   2. JWT Authentication:

      - For security purposes, decide to use JWT (JSON Web Tokens) to create authentication tokens. These tokens are used to authenticate users on every request to the server.

   3. Different Passport Strategies:

      - Implement different authentication strategies, including JWT strategy for token validation and local strategy for direct user data verification.

   4. Login and Registration Functions:
      - Create functions for user login and registration, which allow users to log into the system and create their accounts.

   ## Bonus

   Secure update and delete routes by enabling only admin users to access them

Happy coding, guys! 🚀

> Remember, there’s no one “right” way to code. Explore, experiment, and find the approach that works best for you. Keep learning and growing!
