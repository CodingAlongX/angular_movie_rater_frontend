import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Movie} from "./models/movie";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8000/api/movies/'

  headers = new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Authorization': 'Token b95592c0cc04aece687e6e553973f56e050697c5'
    }
  )

  private movies = ['terminator', 'predator']


  constructor(
    private httpClient: HttpClient
  ) {
  }

  getMovies() {
    return this.httpClient.get<Movie[]>(this.baseUrl, {headers: this.headers})
  }

  getMovie(id: number) {
    return this.httpClient.get<Movie>(`${this.baseUrl}${id}/`, {headers: this.headers})
  }

  createMovie(title: string, description: string) {

    const body = JSON.stringify({
      title: title,
      description: description,
    })
    return this.httpClient.post(`${this.baseUrl}`, body, {headers: this.headers})
  }

  updateMovie(id: number, title: string, description: string) {

    const body = JSON.stringify({
      title: title,
      description: description,
    })
    return this.httpClient.put(`${this.baseUrl}${id}/`, body, {headers: this.headers})
  }

  deleteMovie(id: number) {
    return this.httpClient.delete(`${this.baseUrl}${id}/`, {headers: this.headers})
  }

  rateMovie(rate: number, movieId: number) {
    const body = JSON.stringify({
      stars: rate
    })
    return this.httpClient.post(`${this.baseUrl}${movieId}/rate_movie/`, body, {headers: this.headers})
  }
}
