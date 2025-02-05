import { useEffect, useState } from 'react';
import './AdminMoviePicker.scss';
import { Movie } from '../models/Movie';
import { getAllMovies } from '../services/api';

interface AdminMoviePickerProps {
  handleMovieToEdit: (movie: Movie | null) => void;
}

function AdminMoviePicker({handleMovieToEdit}: AdminMoviePickerProps) {
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
      handleMovieToEdit(null);
      return;
    }

    const selectedMovie = movies.find((movie) => movie.id === selectedMovieId);

    if (selectedMovie) {
      handleMovieToEdit(selectedMovie);
    }
  }

  return (
    <div className='admin-movie-container'>
      <label htmlFor='movie'>Choose a movie for editing:</label>
      <select name='movie' id='movie' onChange={changedMovieHandler}>
        <option value=''>- Movie list -</option>
        {movies.map((movie) => (
          <option key={movie.id} value={movie.id}>
            {movie.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AdminMoviePicker;