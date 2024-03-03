import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OmdbApiService } from './services/omdb-api.service';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { OMDBResponse } from './omdbresponse';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CA2';
  movieData?: OMDBResponse;
  errorMessage: string = '';

  constructor(private _omdbService: OmdbApiService) { }

  getMovieDetails(movieName: string): void {
    this._omdbService.getMovieData(movieName).subscribe(
      movieData => {
        this.movieData = movieData;
        console.log("Director name : " + this.movieData.Director);
      },
      error => this.errorMessage = error
    );
  }
}
