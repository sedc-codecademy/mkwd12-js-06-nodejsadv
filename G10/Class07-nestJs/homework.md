# Homework - Task Management App

## Basic Requirements

Let's create a Task Management App! Initially, data will be stored in memory, within the services or in a separate ts file.

The Task Management App will feature the following functionalities:

### API for Tasks:

- Create a task
- Get all tasks
- Get a task by id
- Update a task
- Delete a task

### API for Categories:

- Create a category
- Get all categories
- Get a category by id
- Update a category
- Delete a category

## Models

### Task

The following properties should be included in the task model:

- `id`
- `title` e.g., "Fix the leaking tap"
- `description` e.g., "The tap in the kitchen is leaking and needs to be fixed..."
- `dueDate` e.g., "2024-04-10"
- `priority`: (e.g., "Low", "Medium", "High")
- `status`: (e.g., "Pending", "In Progress", "Completed")
- `categoryId`: (to associate a task with a category)

You are free to add more properties if you wish.

### Category

The following properties should be included in the category model:

- `id`
- `name` e.g., "Home Maintenance"
- `description` e.g., "Tasks related to maintaining and improving the house."

You are free to add more properties if you wish.

## Additional notes

- Test your APIs with Postman before you submit the homework.
- Don't forget to send the Postman collection along with your homework.
