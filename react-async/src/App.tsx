import React, { useEffect, useState } from "react";
import "./App.css";
import { IMovie } from "./models/IMovie";
import { MovieService } from "./services/MovieService";

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    let service = new MovieService();
    service.getMovies().then((movies) => setMovies(movies));
  }, []);

  return <div className="App">Hittade: {movies.length} filmer</div>;
}

export default App;
