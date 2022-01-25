import { Movie } from "../models/Movie";
import { IDataService } from "./IDataService";

export class MockDataService implements IDataService {
  movies: Movie[] = [
    {
      Title: "Lord of the rings",
      Year: 1998,
      Description: "Follow Frodo and Sam",
      ImageUrl: "...",
    },
    {
      Title: "The two towers",
      Year: 1999,
      Description: "Follow Frodo and Sam again",
      ImageUrl: "...",
    },
    {
      Title: "Return of the king",
      Year: 2000,
      Description: "Follow Frodo and Sam for the last time",
      ImageUrl: "...",
    },
  ];

  GetData(): Promise<Movie[]> {
    return new Promise<Movie[]>((resolve) => {
      resolve(this.movies);
    });
  }
}
