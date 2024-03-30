import Movie from "../models/movie.model.js";

// responsible for communcating with the DB and making CRUD operations
export default class MovieService {
  static async getAll() {
    const data = Movie.find({});
    console.log(data);
    return data;
  }

  static async getById(id) {
    const movie = Movie.findById(id);
    console.log(movie);
    return movie;
  }

  static async create(body) {
    // const movie = new Movie(body);
    // return await movie.save()

    // more valid approach and more mongoose-like - creates the Movie object in the background without explicitly instantiating new Movie model
    return await Movie.create(body);
  }

  static async update(id, body) {
    // Not good because it bypasses all the validations
    // the {new: true} flag returns the updated document
    // return Movie.findByIdAndUpdate(id, body, { new: true });

    let movie = await Movie.findById(id);
    const updatedData = { ...movie, ...body };
    movie.set(updatedData);
    await movie.save();
    return movie;
  }

  static async delete(id) {
    return Movie.findByIdAndDelete(id);
  }
}
