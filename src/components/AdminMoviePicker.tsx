import { useState } from 'react';
import './AdminMoviePicker.scss';
import { Movie } from '../models/Movie';


function AdminMoviePicker() {
  const [movies, setMovies] = useState<Movie[]>([]);

  return (
    <div className='admin-movie-container'>

    </div>
  );
}

export default AdminMoviePicker;