import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { Movie } from 'src/app/movies/interface/movie';

@Component({
  selector: 'app-movies-search-results',
  templateUrl: './movies-search-results.component.html',
  styleUrls: ['./movies-search-results.component.css']
})
export class MoviesSearchResultsComponent{


  @Input() moviesSearchResults:Movie[]=[]

    movieImg='http://image.tmdb.org/t/p/w500/'




}
