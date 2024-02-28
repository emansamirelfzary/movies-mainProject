import { Component, OnInit } from '@angular/core';
import { TvSeries } from '../../interface/tv-series';
import { TvShowService } from '../../services/tv-show.service';

@Component({
  selector: 'app-trending-tv-series',
  templateUrl: './trending-tv-series.component.html',
  styleUrls: ['./trending-tv-series.component.css','../tv-series/tv-series.component.css']
})
export class TrendingTvSeriesComponent implements OnInit{
  seriesImg='http://image.tmdb.org/t/p/w500/'
  trendingTvSeries:TvSeries[]=[]
  currentPage: number = 1;
  pages:number[]=[]
  totalPages:number=5

  constructor(private _tvShowService:TvShowService){}

ngOnInit(): void {
    this.showTrendingTvSeries(this.currentPage)
}

  showTrendingTvSeries(page:number): void{
    window.scrollTo(0,0)
    this._tvShowService.getTrendingSeries(page).subscribe({
      next:(response) => {
      this.trendingTvSeries = response.results;
      this.pages = Array(this.totalPages).fill(0).map((x, i) => i + 1);
      this.currentPage = page;
    }
  });
  }
}
