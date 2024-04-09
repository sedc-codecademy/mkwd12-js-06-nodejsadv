# Exercise - Movie Library - Refactor the previous homework using classes

- Rename the Movie interface to IMovie (the properties should remain the same)
- Create a class called Movie that will implement the IMovie Interface.
- The properties should be private

- Create a class MovieLibrary that is going to have a property `movies` which is going to be of type array of IMovies.
- Create a method addMovie which is going to accept one parameter, an instance of the `Movie` class and will add that movie to the `movies` array.
- Create method `printMovies` which is going to accept one parameter `genre` that is going to have the default value of `action`. If value for genre is not provided return only the movies of the category `action`. If value is provided (`comedy` for example) return the movies of that category.
- Create a static method `movieDetail(movie)` that is going to accept one parameter that is instance of Movie class, and will return the sentance `Movie name is [the name of the movie] and is of genre: [the genre of the movie]`

## NOTE: This exercise is not mendatory, it is bonus if you have time and want additional challenge.
