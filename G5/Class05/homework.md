# Exercise - Movie Library

## PART 1

- Create interface named Movie containg the following properties: id: string, title: string, duration: number (minutes of the duration), genre: string, hasWonOscar: boolean (make it optional)
- Create an array named movies which will be of type array of Movies
- Create a function named addMovie which is going to accept the following properties: title, duration, genre, hasWonOscar (with their corresponding types)
- The function should add a movie in the movies array.

## PART 2

- Create a function printMovies which is going to accept two parameters: moviesArray (array of movies, meaning the movies that we would like to iterate and print) and genre.
- The property genre should have the default value of 'action', meaning if argument for the property genre is not provided return the movies of the genre 'action', but if argument for the property genre is provided return the movies of the coresponding genre.
