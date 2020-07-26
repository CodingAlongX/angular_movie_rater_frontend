import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  movies;

  selectedMovie;

  constructor(
    private apiService: ApiService
  ) {
  }

  ngOnInit(): void {

    this.apiService.getMovies().subscribe(
      value => {
        this.movies = value
      },
      error => {
        console.log(error)
      }
    )

  }

  selectMovie(movie) {
    this.selectedMovie = movie;
    console.log('SM:', this.selectedMovie)
  }
}
