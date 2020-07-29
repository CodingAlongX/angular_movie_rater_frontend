import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {faEdit, faStar, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  faEdit = faEdit
  faTrash = faTrash

  @Input() movies: Movie[] = [];

  @Output() selectMovie = new EventEmitter<Movie>()
  @Output() editedMovie = new EventEmitter<Movie>()
  @Output() newMovie = new EventEmitter()
  @Output() deletedMovie = new EventEmitter<Movie>()


  constructor() {
  }

  ngOnInit(): void {

  }

  movieClicked(movie: Movie) {
    this.selectMovie.emit(movie)

  }

  editMovie(movie: Movie) {
    this.editedMovie.emit(movie)
  }

  createNewMovie() {

    this.newMovie.emit()
  }

  deleteMovie(movie: Movie) {
    this.deletedMovie.emit(movie)

  }
}
