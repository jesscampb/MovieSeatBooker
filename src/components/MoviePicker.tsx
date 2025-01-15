import './MoviePicker.scss';

function MoviePicker() {
    return(
        <div className="movie-container">
        <label htmlFor="movie">Pick a movie:</label>
        <select name="movie" id="movie">
          <option value="100">Fast and furious 6 (100 kr)</option>
          <option value="50">The mummy returns (50 kr)</option>
          <option value="70">Jumanji: Welcome to the Jungle (70 kr)</option>
          <option value="40">Rampage (40 kr)</option>
        </select>
      </div>
    );
}

export default MoviePicker;