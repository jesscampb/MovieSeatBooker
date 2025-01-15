import './App.scss';
import MoviePicker from './components/MoviePicker';
import SeatStatusLegend from './components/SeatStatusLegend';
import SeatPicker from './components/SeatPicker';

function App() {
  return (
    <>
      <MoviePicker/>
      <SeatStatusLegend/>
      <SeatPicker/>
    </>
  );
}

export default App;
