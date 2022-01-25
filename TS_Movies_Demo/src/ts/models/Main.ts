import { IDataService } from "../services/IDataService";
import { Movie } from "./Movie";

export class Main {
  async Start(service: IDataService) {
    let movies = await service.GetData();

    if (movies.length > 0) {
      this.PrintMovies(movies);
    }
  }

  PrintMovies(movies: Movie[]) {
    let moviesContainer = document.getElementById("movie-container");
    moviesContainer.innerHTML = "";

    for (let i = 0; i < movies.length; i++) {
      let container = document.createElement("div");
      let header = document.createElement("h3");
      let img = document.createElement("img");

      header.innerHTML = movies[i].Title;
      img.src = movies[i].ImageUrl;
      container.appendChild(header);
      container.appendChild(img);

      moviesContainer.appendChild(container);
    }
  }
}
