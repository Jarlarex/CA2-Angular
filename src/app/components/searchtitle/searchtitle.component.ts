import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OmdbApiService } from '../../services/omdb-api.service';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { OMDBResponse} from '../../omdbresponse';

@Component({
  selector: 'app-searchtitle',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgFor, NgIf],
  templateUrl: './searchtitle.component.html',
  styleUrls: ['./searchtitle.component.css']
})
export class SearchtitleComponent {
  movieData?: OMDBResponse | undefined;
  errorMessage: any = '';

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