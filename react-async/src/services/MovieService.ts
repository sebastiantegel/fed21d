import axios from "axios";
import { IMovie } from "../models/IMovie";

export class MovieService {
  async getMovies() {
    let response = await axios.get<IMovie[]>(
      "https://medieinstitutet-wie-products.azurewebsites.net/api/products"
    );

    let movies = response.data;
    return movies;
  }
}
