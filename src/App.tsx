import React from 'react';
import './App.scss';
import MoviePicker from './components/MoviePicker';
import SeatStatusLegend from './components/SeatStatusLegend';

function App() {
  return (
    <>
      <MoviePicker/>
      <SeatStatusLegend/>
    </>
  );
}

export default App;
