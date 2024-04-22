# Homework 5 - Albums in Music App

### Deadline: 18.05.2024

## Basic Requirement

This is continence of the previous homework.

To be able to complete this homework you will need to have the [previous one](https://github.com/sedc-codecademy/mkwd12-js-06-nodejsadv/blob/main/G1/homework/homework5.md) done.

The goal of this homework is to add albums in the music app.

Add a new route in the music app that will allow you to add albums to the music app.
Albums should have the following properties:
* id
* name (the name of the album) e.g. "Thriller"
* artist (the artist that made the album) e.g. "Michael Jackson"
* year (the year the album was released) e.g. 1982

We need to following endpoints:
1. Get all albums
2. Get album by id (should also return the songs on the album and information about the artist)
3. Add album
4. Update album
5. Delete album

Business logic:
* Album can be assigned to only one artist
* Song can be assigned to only one album
* Artist can have multiple albums
* Album can have multiple songs

You are free to design the database as you see fit, but you should have at least 3 tables: `albums`, `artists` and `songs`. You can add more tables if you see fit.
We encourage you to use foreign keys to connect the tables, and to experiment until you find the best solution that works for you, in the most simple way.
The process of experimenting and finding the best solution is very important, and it is a good practice to do it. Mistakes makes us learn and improve.
  
### Bonus:
1. Assign song to album (should also update the song with the album id)
2. Assign an artist to an album
3. Get all albums by artist
4. Get all albums by year
5. Search for albums by name with all its songs
6. Search for artists by name (case-insensitive)
7. Search for songs by name (case-insensitive)
8. Sort songs by duration
9. Sort albums by year
10. Add pagination while fetching all songs, songs should be divided in pages of 10 songs by default (configurable)

## Before you send it...
* Don't forget to test your api with Postman.
* Don't forget to add a .gitignore file to your project and add /node_modules to it.
* Postman collection in not necessary when Swagger is added, no need to send it.
