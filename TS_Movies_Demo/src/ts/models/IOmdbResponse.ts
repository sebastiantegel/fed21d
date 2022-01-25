export interface IOmdbResponse {
  Search: IOmdbMovie[];
}

export interface IOmdbMovie {
  Title: string;
  Year: string;
  Poster: string;
  Description: string;
}
