import { SharedModule } from './../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { moviesComponent } from './components/movies/movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { RouterModule } from '@angular/router';
import { TrendingMoviesComponent } from './components/trending-movies/trending-movies.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RemoveNullImgPipe } from './pipes/remove-null-img.pipe';



@NgModule({
  declarations: [
moviesComponent,
    MovieDetailsComponent,
    TrendingMoviesComponent,
    RemoveNullImgPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    CarouselModule,
    SharedModule
  ]
})
export class MoviesModule { }
