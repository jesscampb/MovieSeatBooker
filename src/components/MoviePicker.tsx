import './MoviePicker.scss';
import { getAllMovies } from '../services/api';
import { useEffect, useState } from 'react';
import { Movie } from '../models/Movie';

interface MoviePickerProps {
  resetReadyToBookState: () => void;
  handleMovieSelection: (movie: Movie | null) => void;
  resetSelectedSeats: () => void;
}

function MoviePicker({resetReadyToBookState, handleMovieSelection, resetSelectedSeats}: MoviePickerProps) {
  const [movies, setMovies] = useState<Movie[]>([]);


  useEffect(() => {
    const fetchMovieData = async () => {
      const movieData = await getAllMovies();
      setMovies(movieData);
    }
    fetchMovieData();
  }, []);


  function changedMovieHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedMovieId = event.target.value;

    if (!selectedMovieId) {
      handleMovieSelection(null);
      resetSelectedSeats();
      return;
    }

    const selectedMovie = movies.find((movie) => movie.id === selectedMovieId);

    if (selectedMovie) {
      handleMovieSelection(selectedMovie);
      resetSelectedSeats();
      resetReadyToBookState();
    }
  }


  return(
    <div className='movie-container'>
      <label htmlFor='movie'>Pick a movie:</label>
      <select name='movie' id='movie' onChange={changedMovieHandler}>
        <option value=''>What do you want to watch?</option>
        {movies.map((movie) => (
          <option key={movie.id} value={movie.id}>
            {movie.title} ({movie.price} kr)
          </option>
        ))}
      </select>
    </div>
  );
}

export default MoviePicker;