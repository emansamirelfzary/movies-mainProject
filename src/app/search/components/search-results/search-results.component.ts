import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Movie } from 'src/app/movies/interface/movie';
import { TvSeries } from 'src/app/tv-show/interface/tv-series';
import { ActivatedRoute, Params } from '@angular/router';
import { Person } from 'src/app/people/interfaces/person';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit{

  query:any=''
  moviesSearchResults:Movie[]=[]
  tvSearchResults:TvSeries[]=[]
  peopleSearchResults:Person[]=[]

  constructor(
    private _searchService: SearchService, private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe((params: Params) => {
      this.query = params['query'];
      this.multiSearchResults();
    });

    this._activatedRoute.queryParamMap.subscribe((paramMap) => {
      if (paramMap.has('query')) {
        this.query = paramMap.get('query');
        this.multiSearchResults();
      }
    });
  }

  multiSearchResults(): void {
    this._searchService.multiSearch(this.query).subscribe({
      next: (response) => {
        const searchResults = {
          movies: response.results.filter(
            (result:any) => result.media_type === 'movie' && result.poster_path !== null
          ),
          tv: response.results.filter(
            (result: any) => result.media_type === 'tv' && result.poster_path !== null
          )
        };
        this.moviesSearchResults = searchResults.movies;
        this.tvSearchResults=searchResults.tv
      }
    });

    this._searchService.personSearch(this.query).subscribe({
      next:(response)=>{
        console.log(response.results)
        this.peopleSearchResults=response.results.filter((res:any)=>
          res.profile_path !==null )
      }
    })
   }

}
