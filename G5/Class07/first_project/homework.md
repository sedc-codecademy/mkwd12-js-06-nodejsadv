# Budget Tracker App

## Requirements

This project aims to build the foundation of a Budget Tracker App, focusing initially on allowing the user to view personal tracking expenses and incomes. Future iterations will expand functionality to include create, update, and delete operations among others.

### Initial Setup

1. **Project Initialization**: Start by initializing a new NestJS project named `budget_tracker`. If initializing within an already created repository, as demonstrated in class, remember to use the `--skip-git` flag to avoid initializing a new git repository.

   ```bash
   nest new budget_tracker --skip-git
   ```

- Create a module, service and controller named `budget`. Feel free to create them step by step or if you would like to nest/cli this is how you may do so:

2. **Module Creation**: Emphasize the modularity of NestJS by creating a new module named `budget`. This module will encapsulate all features related to budget management.

   ```bash
   nest g module budget
   ```

3. **Service and Controller**: Generate an injectable service and a controller, both named `budget`, to handle business logic and request routing respectively.

   ```bash
   nest g service budget
   nest g controller budget
   ```

### Data Modeling

- **Interfaces**:

  - Create an interface named `Expense` with the following properties:

    - `id: string`
    - `amount: number`
    - `description: string`

  - Define an interface named `Income` that includes:

    - `id: string`
    - `amount: number`
    - `description: string`

  - Introduce a new interface `Budget` comprising:
    - `id: string`
    - `title: string`
    - `balance: number`
    - `currency: ENUM` with options `"EUR"`, `"USD"`, `"MKD"`
    - `expenses: Expense[]` - an array of `Expense` objects
    - `incomes: Income[]` - an array of `Income` objects

### Service Layer

- In the `budget` service, add a private property named `budgets` of type `Budget[]` to store the budget data.
- Populate `budgets` with some hardcoded data representing initial budgets.
- Implement a method named `readBudgets` that will retrieve the array of budgets.

### Controller Logic

- Inject the `budget` service into the `budget` controller.
- Define a method `listBudgets` within the controller that handles GET requests to `/budgets`. This method should return the list of budgets by invoking the `readBudgets` method from the `budget` service.
