import './MoviePicker.scss';
import { getAllMovies } from '../services/api';
import { useEffect, useState } from 'react';
import { Movie } from '../models/Movie';

interface MoviePickerProps {
  setMoviePrice: (selectedPrice: number) => void;
}

function MoviePicker({setMoviePrice}: MoviePickerProps) {

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllMovies();
      setMovies(result);
    }
    fetchData();
  }, []);

  function changedMovieHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedMoviePrice = parseFloat(event.target.value);
    console.log('Selected movie price:', selectedMoviePrice);
    setMoviePrice(selectedMoviePrice);
  }

  return(
      <div className="movie-container">
      <label htmlFor="movie">Pick a movie:</label>
      <select name="movie" id="movie" onChange={changedMovieHandler}>
        <option value="">What do you want to watch?</option>
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