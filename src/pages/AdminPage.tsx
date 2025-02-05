import { useState } from "react";
import AdminMovieForm from "../components/AdminMovieForm";
import AdminMoviePicker from "../components/AdminMoviePicker";
import { Movie } from "../models/Movie";


function AdminPage() {
  const [movieToEdit, setMovieToEdit] = useState<Movie | null>(null);

  const handleMovieToEdit = (movie: Movie | null) => {
    setMovieToEdit(movie);
  }

  return (
    <>
      <AdminMoviePicker handleMovieToEdit={handleMovieToEdit}/>
      <AdminMovieForm movieToEdit={movieToEdit}/>
    </>
  );
}

export default AdminPage;