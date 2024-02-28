import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { homeMoviesComponent } from './components/home-movies/home-movies.component';
import { HomeTvComponent } from './components/home-tv/home-tv.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BreakingBadComponent } from './components/breaking-bad/breaking-bad.component';



@NgModule({
  declarations: [
    HomeComponent,
    MainSliderComponent,
    homeMoviesComponent,
    HomeTvComponent,
    BreakingBadComponent,

  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    CarouselModule
  ]
})
export class HomeModule { }
