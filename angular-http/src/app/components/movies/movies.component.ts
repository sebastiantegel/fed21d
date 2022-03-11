import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: IMovie[] = [];
  constructor(private service: MovieService) {}

  ngOnInit(): void {
    this.service.movies$.subscribe((dataFromService: IMovie[]) => {
      this.movies = dataFromService;
      console.log('Data from observable:', this.movies);
    });

    this.service.getMovies();
  }
}
