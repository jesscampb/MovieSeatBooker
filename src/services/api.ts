import axios from 'axios';
import { Movie } from '../models/Movie';
import { Seat } from '../models/Seat';
import { Booking } from '../models/Booking';


const apiUrl = `http://localhost:3000`;

export async function getAllMovies() {
    const response = await axios.get(`${apiUrl}/movies`);
    const movies = await response.data;
    return movies;
}

export async function getMovie(id: string) {
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

export async function updateSeat(updatedSeat: Seat) {
    const response = await axios.put(`${apiUrl}/seats/${updatedSeat.id}`, updatedSeat);
    return response.data;
}


export async function getAllBookings() {
    const response = await axios.get(`${apiUrl}/bookings`);
    const bookings = await response.data;
    return bookings;
}

export async function addBooking(newBooking: Omit<Booking, 'id'>) {
    const response = await axios.post(`${apiUrl}/bookings`, newBooking);
    return response.data;
}

export async function getBookingsByMovie(movieId: string) {
    const response = await axios.get(`${apiUrl}/bookings?movieId=${movieId}`);
    return response.data;
}