# Node JS Advanced - Workshop 2

This workshop is designed to validate the gained knowledge in the Node JS Advanced module, especially the Nest JS Framework and working with PostgreSQL though TypeORM.

## Instructions on how to start

1. Create a new repository on your GitHub account, where you will push the code and submit your work.
2. Init a new project or use the existing one in this repository.
3. Install the necessary packages for completing the requirements (if you are not using the provided project).
4. Start working on the requirements.

## Main Goal

We are creating a company management system, which will help us manage the employees and departments in the company. The app is meant to be used by the HR department, which will have access to all the employees and departments. They are going to be able to create, update, delete, and read the employees and departments. Each employee will be assigned to a single department, and each department can have multiple employees. Employees must have a unique email address. Employees mush belong to a department.

Employees should have the folioing info:

- Name e.g. "John Doe"
- Email e.g. "<john.doe@example.com>"
- Phone e.g. "+40712345678"
- Hire Date e.g. "2024-05-07T08:10:25.116Z"
- Job Title e.g. "Software Developer"
- Department e.g. (see below for department details)
- Pay Rate e.g. 1000
- Pay Type e.g. "hourly" | "weekly" | "monthly"
- Is Active e.g. true

Departments should have the following info:

- Name e.g. "IT"
- Description e.g. "Information Technology Department"
- Is Active e.g. true
- Employees e.g. (see above for employee details)
- Office Location e.g. "New York"
- Budget e.g. 100000

## The app should provide the following endpoints

1. Get all employees

- User should be able to search employees by name, and filter them by: job title, pay type, is active. The search should be case insensitive.
- All filters that are passed should be applied.
- User should be able to filter employees with "More than X pay rate", "Less than X pay rate", "Between X and Y pay rate".

2. Create a new employee

3. Update an employee

- User should be able to update all the fields of an employee, all together or partially.

4. Delete an employee

5. Get all departments

- User should be able to search departments by name and office location. The search should be case insensitive.
- User should be able to filter departments by active status, and by budget: "More than X budget".

6. Get a department with all employees

7. Create a new department

8. Update a department

- User should be able to update all the fields of a department, all together or partially.

9. Delete a department

## FAQ

- Do we need Auth? - No
- What would be the right way to do **\_\_**? - Use your best judgement, if it works and it's not breaking the requirements, it's probably the right way.

## Before you send

1. SEND THE WORKSHOP SOLUTION UNTIL 21.00 ON THE DAY OF THE WORKSHOP!!!
2. Make sure you have either Postman or Swagger setup to test the endpoints.
3. Make sure you have an .env.example file with all the necessary environment variables. Please use the following env variable names:

```DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=company_management
```

4. Send the link to the repository where you have the code to be reviewed to the following mails:

- Trainer: Ivo Kostovski <ivo.kostovski@gmail.com> GH: <ivo.kostovski@gmail.com>
- Assistant: Iva Cvetkovska <ivacvetkovska.sedc@gmail.com> GH: Iva-Cvetkovska
