import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchApiDataService {
  private httpHeaders = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    })
  };

  constructor(
    private http: HttpClient,
  ) { }

  private fetchApiData(url: string) {
    return this.http.get(url, this.httpHeaders);
  }

  searchApiValues$(key?: string) {
    return this.fetchApiData(`https://itunes.apple.com/search?term=${key}&country=cz&limit=20&entity=musicArtist`);
  }

  getApiItem$(key?: string) {
    return this.fetchApiData(`http://localhost:4200/lookup?id=${key}&entity=album`);
  }
}
