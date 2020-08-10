import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {Movie} from "../models/movie";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

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
    private apiService: ApiService,
    private cookieService: CookieService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const mrToken = this.cookieService.get('mr-token')

    if (!mrToken) {
      this.router.navigate(['/auth'])
    } else {
      this.apiService.getMovies().subscribe(
        (movies: Movie[]) => {
          this.movies = movies
        },
        error => {
          console.log(error)
        }
      )
    }


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
    this.apiService.deleteMovie(movie.id).subscribe(
      data => {
        this.movies = this.movies.filter(mov => mov.id !== movie.id)
      },
      error => {
        console.log(error)
      }
    )
  }

  movieCreated(movie: Movie) {
    this.movies.push(movie)
    this.editedMovie = null;

  }

  movieUpdated(movie: Movie) {
    const index = this.movies.findIndex(mov => mov.id === movie.id)

    if (index >= 0) {
      this.movies[index] = movie
    }
    this.editedMovie = null;

  }

  logout() {
    this.cookieService.delete('mr-token');
    this.router.navigate(['/auth'])
  }
}
