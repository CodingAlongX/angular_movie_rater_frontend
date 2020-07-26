import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8000/api/movies/'

  private movies = ['terminator', 'predator']


  constructor(
    private httpClient: HttpClient
  ) {
  }

  getMovies() {
    return this.httpClient.get(this.baseUrl)
  }
}
