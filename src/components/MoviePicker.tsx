import './MoviePicker.scss';
import { getAllMovies } from '../services/api';
import { useEffect, useState } from 'react';
import { Movie } from '../models/Movie';

interface MoviePickerProps {
  setMoviePrice: (selectedPrice: number) => void;
  handleMovieSelection: (movie: Movie) => void;
  resetSelectedSeats: () => void;
}

function MoviePicker({setMoviePrice, handleMovieSelection, resetSelectedSeats}: MoviePickerProps) {

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      const movieData = await getAllMovies();
      setMovies(movieData);
    }
    fetchMovieData();
  }, []);

  function changedMovieHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedMoviePrice = parseFloat(event.target.value);
    setMoviePrice(selectedMoviePrice);
    resetSelectedSeats();
  }

  return(
    <div className='movie-container'>
      <label htmlFor='movie'>Pick a movie:</label>
      <select name='movie' id='movie' onChange={changedMovieHandler}>
        <option value=''>What do you want to watch?</option>
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