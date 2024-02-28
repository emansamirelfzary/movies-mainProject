import { Component, Input } from '@angular/core';
import { TvSeries } from 'src/app/tv-show/interface/tv-series';

@Component({
  selector: 'app-tv-search-results',
  templateUrl: './tv-search-results.component.html',
  styleUrls: ['./tv-search-results.component.css','../movies-search-results/movies-search-results.component.css']
})
export class TvSearchResultsComponent {

  @Input() tvSearchResults:TvSeries[]=[]

  tvImg='http://image.tmdb.org/t/p/w500/'



}
