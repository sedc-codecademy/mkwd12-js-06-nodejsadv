# Workshop: Build Your Own Booking App

## Part 1: Book&Go Application

### Overview

In an era where booking accommodations online is the norm, this workshop challenges you to build your own version of a booking app, named "Book&Go". This app will allow users to create new accommodations and book them as needed.

### Requirements

#### Application Objective

The primary goal of the "Book&Go" app is to facilitate the creation and booking of accommodations by users. It should serve as a platform where accommodations can be listed, viewed, booked, and managed effectively.

#### Accommodation Entity Requirements

Each accommodation within the app should possess the following properties:

- `name`: string
- `address`: string
- `bookingPricePerDay`: number
- `type`: string (options: apartment, hotel, hostel)
- `hasAC`: boolean
- `hasPrivateParking`: boolean
- `hasWifi`: boolean
- `isAvailable`: boolean

#### API Endpoints

- **POST** `/accommodations` - Create a new accommodation.
- **GET** `/accommodations` - List all accommodations.
- **GET** `/accommodations/:id` - Retrieve an accommodation by its ID.
- **DELETE** `/accommodations/:id` - Remove an accommodation by its ID.
- **PUT** `/accommodations/:id` - Update an accommodation by its ID.

#### BONUS Features (These are not mendatory but feel free to implement them if you want additional challenge and have time)

- Primary goal: this new entity should only contain the property `accommodation`, which is the ID of the accommodation to be booked.

  - Utilize mongoose's prepopulate to display the accommodation object instead of its ID.

- **POST** `/bookings` - Create a booking for an accommodation.
- **DELETE** `/bookings/:id` - Cancel a booking.
- Automatically update an accommodation's `isAvailable` property to `false` when it is booked, and back to `true` when a booking is canceled, to reflect its availability status accurately.
- Add validations, props mapping etc.

### Development Environment

- **Backend Framework**: Node.js, Express, (Any other library if needed)
- **Database**: MongoDB with Mongoose ORM

#### MongoDB Atlas Connection

For participants facing issues with MongoDB Atlas or cluster setup, you may use the connection string provided in the previous class. Ensure your database is named **book_and_go** with two collections: **accommodations** and **bookings**.

### Workshop Guidelines

- Approach the workshop in a step-by-step manner, focusing on completing the current requirement before moving to the next.
- Break down tasks into smaller, manageable sub-tasks.
- Regularly test your code to ensure functionality.
- Don't hesitate to ask questions or seek clarification on blockers by unmuting during the workshop.

### Submission

Upon completion, or at the end of the workshop, push your code to GitHub and email the repository link to the following addresses:

- dimitrov.gjorge@protonmail.com
- ivanovv7@protonmail.com

### Good luck and happy coding!
