import { v4 as uuidv4 } from "uuid";

export default class Movie {
  constructor(name, genre, director, year, description, rating) {
    this.id = uuidv4();
    this.name = name;
    this.genre = genre;
    this.director = director;
    this.year = year;
    this.description = description;
    this.rating = rating;
  }
}
