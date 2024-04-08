# Homework 2 - Music App

### Deadline: 21.04.2024

## Basic Requirement

Let's build a music app! As for beginning, we will store the data in memory, in the services. The music app will have the following features:

1. Api for **Artists**:

   - Create an artist
   - Get all artists
   - Update an artist
   - Delete an artist

2. Api for **Songs**:
   - Create a song
   - Get a song by id
   - Update a song
   - Delete a song

## Models

### Artist

The following properties should be present in the artist model:

- id
- name e.g. "Ed Sheeran"
- age e.g. 30
- country e.g. "UK"

You are free to add more properties if you want or need to.

### Song

The following properties should be present in the song model:

- id
- name e.g. "Shape of You"
- duration (in seconds) e.g. 233
- genre: (e.g. "pop")
- releaseDate: (e.g. "2021-04-21")

You are free to add more properties if you want or need to.

## Bonus

Bonus points will be given for the following features:

- Get a single artist with all of his/her songs
- Get all songs by an artist
- Get all songs by genre
- Get all artists that have at least one song in a specific genre

## Before you send it...

- Don't forget to test your api with Postman.
- Don't forget to add a .gitignore file to your project and add /node_modules to it.
- Don't forget to send the postman collection with your homework! (instructions on how to do this in the root instructions.md file)
