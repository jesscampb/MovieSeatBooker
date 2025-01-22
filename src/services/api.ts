import axios from 'axios';
import { Movie } from '../models/Movie';
import { Seat } from '../models/Seat';


const apiUrl = `http://localhost:3000`;

export async function getAllMovies() {
    const response = await axios.get(`${apiUrl}/movies`);
    const movies = await response.data;
    return movies;
}

export async function getMovie(id:string) {
    const response = await axios.get(`${apiUrl}/movies/${id}`);
    const movie = await response.data;
    return movie;
}

export async function addMovie(newMovie: Omit<Movie, 'id'>) {
    const response = await axios.post(`${apiUrl}/movies`, newMovie);
    return response.data;
}

export async function updateMovie(editedMovie: Movie) {
    const response = await axios.put(`${apiUrl}/movies/${editedMovie.id}`, editedMovie);
    return response.data;
}


export async function getAllSeats() {
    const response = await axios.get(`${apiUrl}/seats`);
    const seats = await response.data;
    return seats;
}