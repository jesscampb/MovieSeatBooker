import './App.scss';
import MoviePicker from './components/MoviePicker';
import SeatStatusLegend from './components/SeatStatusLegend';
import SeatPicker from './components/SeatPicker';
import SelectionInfo from './components/SelectionInfo';

function App() {
  return (
    <>
      <MoviePicker/>
      <SeatStatusLegend/>
      <SeatPicker/>
      <SelectionInfo/>
    </>
  );
}

export default App;
