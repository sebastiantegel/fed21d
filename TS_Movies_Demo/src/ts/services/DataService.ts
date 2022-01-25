import { IDataService } from "./IDataService";
import { Movie } from "./../models/Movie";
import { IOmdbMovie, IOmdbResponse } from "../models/IOmdbResponse";

export class DataService implements IDataService {
  GetData(): Promise<Movie[]> {
    return fetch("https://omdbapi.com/?apikey=416ed51a&s=star")
      .then((response) => response.json())
      .then((data: IOmdbResponse) => {
        return data.Search.map((m: IOmdbMovie) => {
          let movie = new Movie();
          movie.Title = m.Title;
          movie.ImageUrl = m.Poster;
          movie.Description = m.Description;
          movie.Year = +m.Year;

          return movie;
        });
      });
  }
}
