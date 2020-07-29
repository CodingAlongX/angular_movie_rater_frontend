import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {Movie} from "../models/movie";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  movies: Movie[] = [];

  selectedMovie: Movie;
  editedMovie: any;
  movie: Movie;

  constructor(
    private apiService: ApiService
  ) {
  }

  ngOnInit(): void {

    this.apiService.getMovies().subscribe(
      (movies: Movie[]) => {
        this.movies = movies
      },
      error => {
        console.log(error)
      }
    )

  }

  selectMovie(movie: Movie) {
    this.selectedMovie = movie;
    this.editedMovie = null;
  }

  editMovie(movie: Movie) {
    this.editedMovie = movie;
    this.selectedMovie = null;
  }

  createNewMovie() {
    this.editedMovie = {title: '', description: ''};
    this.selectedMovie = null;
  }

  deleteMovie(movie: Movie) {
    console.log('delete', movie.title)
  }
}
