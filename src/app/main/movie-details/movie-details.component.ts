import {Component, Input, OnInit} from '@angular/core';
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {ApiService} from "../../api.service";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input()
  movie;

  faStar = faStar;

  rateHovered = 0;

  constructor(
    private apiService: ApiService
  ) {
  }

  ngOnInit(): void {
  }

  rateHover(rate: number) {
    this.rateHovered = rate
  }

  rateClicked(rate: number) {
    this.apiService.rateMovie(rate, this.movie.id).subscribe(
      result => {
        console.log(result)
      },
      error => {
        console.log(error)
      }
    )
  }
}
