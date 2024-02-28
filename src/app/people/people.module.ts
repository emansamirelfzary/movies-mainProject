import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './components/person/person.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PersonImgComponent } from './components/person-img/person-img.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PersonMovieCreditsComponent } from './components/person-movie-credits/person-movie-credits.component';
import { RemoveNullMoviesPipe } from './pipes/remove-null-movies.pipe';
import { PersonTvCreditsComponent } from './components/person-tv-credits/person-tv-credits.component';
import { RemoveNullTvPipe } from './pipes/remove-null-tv.pipe';



@NgModule({
  declarations: [
    PersonComponent,
    PersonImgComponent,
    PersonMovieCreditsComponent,
    RemoveNullMoviesPipe,
    PersonTvCreditsComponent,
    RemoveNullTvPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    CarouselModule
  ]
})
export class PeopleModule { }
