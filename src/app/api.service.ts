import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Movie} from "./models/movie";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8000/'
  baseMovieUrl = `${this.baseUrl}api/movies/`

  headers = new HttpHeaders(
    {
      'Content-Type': 'application/json',
      //'Authorization': 'Token b95592c0cc04aece687e6e553973f56e050697c5'
    }
  )

  private movies = ['terminator', 'predator']


  constructor(
    private httpClient: HttpClient
  ) {
  }

  getMovies() {
    return this.httpClient.get<Movie[]>(this.baseMovieUrl, {headers: this.headers})
  }

  getMovie(id: number) {
    return this.httpClient.get<Movie>(`${this.baseMovieUrl}${id}/`, {headers: this.headers})
  }

  createMovie(title: string, description: string) {

    const body = JSON.stringify({
      title: title,
      description: description,
    })
    return this.httpClient.post(`${this.baseMovieUrl}`, body, {headers: this.headers})
  }

  updateMovie(id: number, title: string, description: string) {

    const body = JSON.stringify({
      title: title,
      description: description,
    })
    return this.httpClient.put(`${this.baseMovieUrl}${id}/`, body, {headers: this.headers})
  }

  deleteMovie(id: number) {
    return this.httpClient.delete(`${this.baseMovieUrl}${id}/`, {headers: this.headers})
  }

  rateMovie(rate: number, movieId: number) {
    const body = JSON.stringify({
      stars: rate
    })
    return this.httpClient.post(`${this.baseMovieUrl}${movieId}/rate_movie/`, body, {headers: this.headers})
  }

  loginUser(authData){
    const body = JSON.stringify(authData)
    return this.httpClient.post(`${this.baseUrl}auth/`, body, {headers: this.headers})
  }
}
