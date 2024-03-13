import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { OMDBResponse } from '../omdbresponse';
import { OMDBResponse2 } from '../omdbresponse2';

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {


  private _siteURL = "https://www.omdbapi.com/"
  private _key = "?apikey=b0d0f014&t="
  private _key2 = "?apikey=b0d0f014&s="
  constructor(private _http: HttpClient) { }

  getMovieData(movieName: string): Observable<OMDBResponse> {
    return this._http.get<OMDBResponse>(this._siteURL + this._key + movieName)
      .pipe(
        tap(data => console.log('Moviedata/error' + JSON.stringify(data))
        ),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    console.log('OmdbApiService:' + err.message);
    return throwError(() => new Error("OmdbApiService:" + err.message))
  }

  getMoviesData(movieName:string, page:number):Observable<OMDBResponse2> {
    return this._http.get<OMDBResponse2>(this._siteURL + this._key2 + movieName + "&page=" + page)
    .pipe(
      tap(data => console.log('Moviedata/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }
}
