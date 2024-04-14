## **Budget Tracker App Part 2**

### **Overview**

Continue enhancing the Budget Tracker app developed in the previous assignment. This part focuses on expanding the app's capabilities by adding new routes to manage budgets more effectively.

### **Tasks**

1. **Enhancements to Existing Features**

   - Utilize the foundation built during the previous class’s homework.

2. **New API Endpoints**

   - **POST `/budget`**
     - **Functionality**: Create a new budget entry.
     - **Details**: This endpoint should accept budget details, create a new budget, and add it to the `budgets` array within the budgets service.
   - **GET `/budget/:id`**
     - **Functionality**: Retrieve a budget by its ID.
     - **Details**: This endpoint should fetch and return the budget details corresponding to the specified ID.
   - **DELETE `/budget/:id`**
     - **Functionality**: Delete a budget by its ID.
     - **Details**: This endpoint should remove the budget entry from the `budgets` array based on the specified ID.
   - **PUT `/budget/:id`**
     - **Functionality**: Update an existing budget by its ID.
     - **Details**: This endpoint should allow updating details of an existing budget in the `budgets` array.

3. **Additional Features**
   - **Data Transfer Objects (DTOs)**
     - Implement DTOs for handling data validation when budgets are created or modified.
   - **Error Handling**
     - Implement robust error handling to manage and respond to errors gracefully.

### **Submission Guidelines**

- Do not forget to provide the collection from postman.
- Test your app before sending, if you have any blockers or issues, feel free to specify them.
