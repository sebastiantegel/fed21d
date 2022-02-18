import { Component, OnInit } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  switchMap,
} from 'rxjs';
import { IMovie } from 'src/app/models/IMovie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-moviesearch',
  templateUrl: './moviesearch.component.html',
  styleUrls: ['./moviesearch.component.scss'],
})
export class MoviesearchComponent implements OnInit {
  searchTerm = new Subject<string>();
  movies: Observable<IMovie[]> = new Observable();
  isLoading: boolean = false;

  constructor(private service: MovieService) {}

  ngOnInit(): void {
    this.movies = this.searchTerm.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchTermFromUser) => {
        this.isLoading = true;
        return this.service.searchMovie(searchTermFromUser);
      })
    );

    this.movies.subscribe(() => {
      this.isLoading = false;
    });
  }

  search(textFromUser: string) {
    this.searchTerm.next(textFromUser);
  }
}
