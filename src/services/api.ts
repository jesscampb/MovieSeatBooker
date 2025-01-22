import axios from "axios";
import { Movie } from "../models/Movie";


const apiUrl = `http://localhost:3000/movies`;

export async function getAllMovies() {
    const response = await axios.get(apiUrl);
    const movies = await response.data;
    return movies;
}

export async function getMovie(id:string) {
    const response = await axios.get(`${apiUrl}/${id}`);
    const movie = await response.data;
    return movie;
}

export async function addMovie(newMovie: Omit<Movie, 'id'>) {
    const response = await axios.post(apiUrl, newMovie);
    return response.data;
}

export async function updateMovie(editedMovie: Movie) {
    const response = await axios.put(`${apiUrl}/${editedMovie.id}`, editedMovie);
    return response.data;
}