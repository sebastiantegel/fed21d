import { Movie } from "../models/Movie";

export interface IDataService {
  GetData(): Promise<Movie[]>;
}
