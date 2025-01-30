import './App.scss';
import MoviePicker from './components/MoviePicker';
import SeatStatusLegend from './components/SeatStatusLegend';
import SeatPicker from './components/SeatPicker';
import SelectionInfo from './components/SelectionInfo';
import ProceedToDetailsButton from './components/ProceedToDetailsButton';
import BookingForm from './components/BookingForm';
import { useState } from 'react';
import { Movie } from './models/Movie';

function App() {
  const [moviePrice, setMoviePrice] = useState<number>(0);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [seatCount, setSeatCount] = useState<number>(0);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleMovieSelection = (movie: Movie) => {
    setSelectedMovie(movie);
    setMoviePrice(movie.price);
  }

  const resetSelectedSeats = () => {
    setSelectedSeats([]);
  };

  return (
    <>
      <MoviePicker handleMovieSelection={handleMovieSelection} resetSelectedSeats={resetSelectedSeats}/>
      <SeatStatusLegend/>
      <SeatPicker setSeatCount={setSeatCount} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}/>
      <SelectionInfo moviePrice={moviePrice} seatCount={seatCount}/>
      <ProceedToDetailsButton/>
      <BookingForm/>
    </>
  );
}

export default App;
