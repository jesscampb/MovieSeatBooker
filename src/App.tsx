import './App.scss';
import MoviePicker from './components/MoviePicker';
import SeatStatusLegend from './components/SeatStatusLegend';
import SeatPicker from './components/SeatPicker';
import SelectionInfo from './components/SelectionInfo';
import ContinueButton from './components/ContinueButton';
import BookingForm from './components/BookingForm';
import { useState } from 'react';
import { Movie } from './models/Movie';
import { getBookingsByMovie } from './services/api';

function App() {
  const [moviePrice, setMoviePrice] = useState<number>(0);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [seatCount, setSeatCount] = useState<number>(0);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [occupiedSeats, setOccupiedSeats] = useState<string[]>([]);
  const [readyToBook, setReadyToBook] = useState<boolean>(false);

  const fetchBookings = async (movieId: string) => {
    const bookings = await getBookingsByMovie(movieId);
    const occupiedSeats = bookings.flatMap((booking) => booking.seatId);
    setOccupiedSeats(occupiedSeats);
  }

  const handleMovieSelection = (movie: Movie | null) => {
    setSelectedMovie(movie);
    
    if (movie && movie.id) {
    setMoviePrice(movie.price);
    fetchBookings(movie.id);
    }
    else {
      setMoviePrice(0);
      setOccupiedSeats([]);
    }
  };

  const resetSelectedSeats = () => {
    setSelectedSeats([]);
  };

  return (
    <>
      <MoviePicker handleMovieSelection={handleMovieSelection} resetSelectedSeats={resetSelectedSeats}/>
      <SeatStatusLegend/>
      {selectedMovie && (
        <>
          <SeatPicker setReadyToBook={setReadyToBook} occupiedSeats={occupiedSeats} setSeatCount={setSeatCount} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}/>
          <SelectionInfo moviePrice={moviePrice} seatCount={seatCount}/>
          <ContinueButton readyToBook={readyToBook}/>
        </>
      )}
      <BookingForm selectedMovie={selectedMovie} selectedSeats={selectedSeats}/>
    </>
  );
}

export default App;
