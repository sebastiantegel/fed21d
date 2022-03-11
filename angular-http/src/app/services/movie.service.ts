import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMovie } from '../models/IMovie';
import { IOmdbResponse } from '../models/IOmdbResponse';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies = new Subject<IMovie[]>();
  movies$ = this.movies.asObservable();

  constructor(private http: HttpClient) {}

  getMovies(): void {
    this.http
      .get<IOmdbResponse>(environment.omdbUrl + 's=star')
      .subscribe((dataFromOmdb) => {
        console.log('Data from omdb:', dataFromOmdb.Search);
        this.movies.next(dataFromOmdb.Search);
      });
  }

  searchMovie(searchTerm: string): Observable<IMovie[]> {
    return this.http
      .get<IOmdbResponse>(environment.omdbUrl + 's=' + searchTerm)
      .pipe(map((data: IOmdbResponse) => data.Search));
  }
}
