import './App.scss';
import MoviePicker from './components/MoviePicker';
import SeatStatusLegend from './components/SeatStatusLegend';
import SeatPicker from './components/SeatPicker';
import SelectionInfo from './components/SelectionInfo';
import ProceedToDetailsButton from './components/ProceedToDetailsButton';
import { useState } from 'react';

function App() {
  const [moviePrice, setMoviePrice] = useState<number>(0);
  const [seatCount, setSeatCount] = useState<number>(0);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const resetSelectedSeats = () => {
    setSelectedSeats([]);
  };

  return (
    <>
      <MoviePicker setMoviePrice={setMoviePrice} resetSelectedSeats={resetSelectedSeats}/>
      <SeatStatusLegend/>
      <SeatPicker setSeatCount={setSeatCount} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}/>
      <SelectionInfo moviePrice={moviePrice} seatCount={seatCount}/>
      <ProceedToDetailsButton/>
    </>
  );
}

export default App;
