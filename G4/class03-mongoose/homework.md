# Node.js Course Management Extension

This assignment involves extending the existing Course Management System built with Node.js and MongoDB. Below are the tasks you need to complete.

## Homework Tasks

### 1. Extend "Courses" Controller with Delete Functionality

- Add a delete method to the `Courses` controller.
- This method should allow deletion of a course by its ID.
- Ensure that the method handles errors and sends appropriate responses to the client.

### 2. Create a New Model for "Trainer"

- Define a new `Trainer` model with the following fields:
  - First name
  - Last name
  - Age
- Each `Trainer` should be linked to the `Courses` they teach.
- Optional: Update the `Courses` model to reference the `Trainer` model instead of having a simple `trainer` string field.
- Optional but recommended: Add joi validation for the `Trainer` model.

## Technical Requirements

- The `Trainer` model should be created in a separate file and imported into the courses model file.
- Use MongoDB references to link the `Trainer` model with the `Courses` model.
- Ensure all new code is properly commented to explain the functionality.
