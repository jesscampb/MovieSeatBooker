import './App.scss';
import MoviePicker from './components/MoviePicker';
import SeatStatusLegend from './components/SeatStatusLegend';
import SeatPicker from './components/SeatPicker';
import SelectionInfo from './components/SelectionInfo';
import { useState } from 'react';

function App() {
  const [seatCount, setSeatCount] = useState(0);

  return (
    <>
      <MoviePicker/>
      <SeatStatusLegend/>
      <SeatPicker seatCount={seatCount} setSeatCount={setSeatCount}/>
      <SelectionInfo seatCount={seatCount}/>
    </>
  );
}

export default App;
