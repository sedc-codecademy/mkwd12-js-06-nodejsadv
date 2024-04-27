# Homework 5 - Auth for Music App

### Deadline: 12.05.2024

## Basic Requirement

This is continence of the previous homework.

To be able to complete this homework you will need to have the [previous one](https://github.com/sedc-codecademy/mkwd12-js-06-nodejsadv/blob/main/G1/homework/homework4.md) done.

The goal of this homework is to add authentication to the music app.

### Authentication

1. Create appropriate routes for authentication.
2. Users should be able to register and login to the application.
3. Use JWT for authentication.
4. Use guards to protect routes that require authentication (all routes except GET methods should only be available to auth users).

### Bonus

1. Add a role based authentication. Users should have roles (admin, moderator, user):
   - Admins can do everything
   - Moderators can get, add & update songs, artists
   - Users can only view songs, artists
2. Add createdBy property which will be the email (username) of the user that created the song or artist.

## Before you send it...

- Don't forget to test your api with Postman.
- Don't forget to add a .gitignore file to your project and add /node_modules to it.
- Postman collection in not necessary when Swagger is added, no need to send it.
