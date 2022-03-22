import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IMovie } from "../models/IMovie";
import { Movie } from "../models/Movie";

export const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [numberOfClicks, setNumberOfClicks] = useState(0);

  useEffect(() => {
    console.log("Trying to get data");

    if (movies.length > 0) return;

    axios
      .get<IMovie[]>(
        "http://medieinstitutet-wie-products.azurewebsites.net/api/products"
      )
      .then((response) => {
        let moviesFromApi = response.data.map((movie: IMovie) => {
          return new Movie(movie.id, movie.name, movie.imageUrl);
        });

        setMovies(moviesFromApi);
      });
  });

  useEffect(() => {
    console.log("NumberOfClicks changed");
  }, [numberOfClicks]);

  useEffect(() => {
    console.log("Movies changed");
  }, [movies]);

  //   console.log(movies);

  let moviesHtml = movies.map((movie: Movie) => {
    let movieLink = `/movie/${movie.id}`;
    return (
      <div key={movie.id}>
        <Link to={movieLink}>{movie.title}</Link>
      </div>
    );
  });

  return (
    <>
      <div>
        Got {movies.length} movies and {numberOfClicks} clicks
      </div>
      <button
        onClick={() => {
          setNumberOfClicks(numberOfClicks + 1);
        }}
      >
        Testa
      </button>

      {moviesHtml}
    </>
  );
};
