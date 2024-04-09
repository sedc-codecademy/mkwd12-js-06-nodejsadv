import { Injectable } from '@nestjs/common';

interface Movie {
  id: number;
  name: string;
  rating: number;
}

@Injectable()
export class MovieService {
  private movies: Movie[] = [
    {
      id: 1,
      name: 'Titanic',
      rating: 10,
    },
    {
      id: 2,
      name: 'Saw',
      rating: 8,
    },
  ];

  getMovies() {
    return this.movies;
  }

  createMovie(movieData: any) {
    const movie = {
      ...movieData,
      id: this.movies.length + 1,
    } satisfies Movie;

    this.movies.push(movie);
  }

  updateMovie(id: number, updateData: any) {
    this.movies = this.movies.map((movie) => {
      if (movie.id === id) {
        return {
          ...movie,
          ...updateData,
        };
      }
      return movie;
    });
  }

  updateMovieRating(id: number, ratingCount: number) {
    this.movies = this.movies.map((movie) => {
      if (movie.id === id) {
        movie.rating = ratingCount;
      }

      return movie;
    });
  }

  deleteMovie(id: number) {
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }
}
