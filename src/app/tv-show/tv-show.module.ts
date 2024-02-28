import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvSeriesComponent } from './components/tv-series/tv-series.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RemoveNullPipe } from './pipe/remove-null.pipe';
import { TvSeriesDetailsComponent } from './components/tv-series-details/tv-series-details.component';
import { TrendingTvSeriesComponent } from './components/trending-tv-series/trending-tv-series.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TvSeriesComponent,
    RemoveNullPipe,
    TvSeriesDetailsComponent,
    TrendingTvSeriesComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    CarouselModule,
    SharedModule
  ],
  exports:[
    RemoveNullPipe
  ]
})
export class TvShowModule { }
