## **Budget Tracker App Part 4**

### **Overview**

Continue enhancing the Budget Tracker app by adding authentication to it.

### **Tasks**

#### 1. **Requirements**

- Implement authentication in the app, ensuring that only authenticated users may access the endpoints.
- Create a users module and users entity. In the TypeORM database, we will have a users table. The user entity should have the following attributes:
  - `email`: string
  - `password`: string
  - `firstName`: string
  - `lastName`: string
- Create an auth module, auth service, auth controller, and auth guard.
- The auth controller should have `login` and `register` methods. These methods should call the corresponding methods of the auth service:
  - The `login` endpoint request body should include:
    - `email`: string
    - `password`: string
  - The `register` endpoint request body should be:
    - `email`: string
    - `password`: string
    - `firstName`: string
    - `lastName`: string
- Implement an auth guard that will validate the JWT token.

**Note:** Feel free to use the code from class as a guide.

#### **Additional Information**

- **Packages you may need**:
  - `bcryptjs`
  - `@nestjs/jwt`
  - `@nestjs/config` (if you prefer using .env files)

### **Submission Guidelines**

- Do not forget to provide the collection from Postman.
- Test your app before submitting. If you have any blockers or issues, feel free to specify them.
