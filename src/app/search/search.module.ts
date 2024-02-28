import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesSearchResultsComponent } from './components/movies-search-results/movies-search-results.component';
import { RemoveNullMoviesPipe } from './pipes/remove-null-movies.pipe';
import { RouterModule } from '@angular/router';
import { TvSearchResultsComponent } from './components/tv-search-results/tv-search-results.component';
import { TvShowModule } from '../tv-show/tv-show.module';
import { PeopleSearchResultsComponent } from './components/people-search-results/people-search-results.component';



@NgModule({
  declarations: [
    SearchResultsComponent,
    MoviesSearchResultsComponent,
    RemoveNullMoviesPipe,
    TvSearchResultsComponent,
    PeopleSearchResultsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    TvShowModule
  ]
})
export class SearchModule { }
