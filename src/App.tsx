import './App.scss';
import MoviePicker from './components/MoviePicker';
import SeatStatusLegend from './components/SeatStatusLegend';
import SeatPicker from './components/SeatPicker';
import SelectionInfo from './components/SelectionInfo';
import { useState } from 'react';

function App() {
  const [moviePrice, setMoviePrice] = useState<number>(0);
  const [seatCount, setSeatCount] = useState<number>(0);

  return (
    <>
      <MoviePicker setMoviePrice={setMoviePrice}/>
      <SeatStatusLegend/>
      <SeatPicker setSeatCount={setSeatCount}/>
      <SelectionInfo/>
    </>
  );
}

export default App;
