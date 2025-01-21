import axios from "axios";


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