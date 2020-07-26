import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private movies = ['terminator', 'predator']


  constructor() {
  }

  getMovies() {
    return this.movies
  }
}
