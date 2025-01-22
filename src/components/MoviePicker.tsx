import './MoviePicker.scss';
import { getAllMovies, getMovie } from '../services/api';
import { useEffect, useState } from 'react';
import { Movie } from '../models/Movie';


function MoviePicker() {

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllMovies();
      setMovies(result);
    }
    fetchData();
  }, []);

  return(
      <div className="movie-container">
      <label htmlFor="movie">Pick a movie:</label>
      <select name="movie" id="movie">
        {movies.map((movie) => (
          <option key={movie.id} value={movie.price}>
            {movie.title} ({movie.price} kr)
          </option>
        ))}
      </select>
    </div>
  );
}

export default MoviePicker;