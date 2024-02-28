import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AllGenresComponent } from './components/all-genres/all-genres.component';
import { RouterModule } from '@angular/router';
import { ShowGenresComponent } from './components/show-genres/show-genres.component';
import { GenreMoviesComponent } from './components/genre-movies/genre-movies.component';
import { GenreTvComponent } from './components/genre-tv/genre-tv.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';




@NgModule({
  declarations: [
    AllGenresComponent,
    ShowGenresComponent,
    GenreMoviesComponent,
    GenreTvComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    SlickCarouselModule
    
  ]
})
export class GenresModule { }
