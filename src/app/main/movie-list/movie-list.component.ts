import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {faEdit, faStar, faTrash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input()
  movies;

  @Output()
  selectMovie = new EventEmitter()
  faEdit = faEdit
  faTrash = faTrash

  constructor() {
  }

  ngOnInit(): void {

  }

  movieClicked(movie) {
    this.selectMovie.emit(movie)

  }
}
