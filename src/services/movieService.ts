import axios from "axios";
import { type Movie } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";
interface MoviesResponse {
  results: Movie[];
}

export default async function fetchMovies(query: string): Promise<Movie[]> {
  const token: string = import.meta.env.VITE_TMDB_TOKEN;
  const response = await axios.get<MoviesResponse>(BASE_URL, {
    params: { query },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.results;
}
