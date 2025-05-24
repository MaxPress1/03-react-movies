import axios from "axios";
import { type AxiosResponse } from "axios";
import { type Movie } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";

export default async function fetchMovies(token: ImportMetaEnv, query: string) {
  const response: AxiosResponse<{ results: Movie[] }> = await axios.get(
    BASE_URL,
    {
      params: { query },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.results;
}
