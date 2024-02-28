import { Component, OnInit} from '@angular/core';
import { TvShowService } from '../../services/tv-show.service';
import { ActivatedRoute } from '@angular/router';
import { TvSeries } from '../../interface/tv-series';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.css']
})
export class TvSeriesComponent  implements OnInit{

  endPoint:any=''
  seriesImg='http://image.tmdb.org/t/p/w500/'
  tvSeries:TvSeries[]=[]
  currentPage: number = 1;
  pages:number[]=[]
  totalPages:number=5

  constructor(private _tvShowService:TvShowService, private _activatedRoute:ActivatedRoute){}

  ngOnInit(): void {


    this.endPoint=this._activatedRoute.snapshot.routeConfig?.path
    console.log(this.endPoint)


    this.showTvSeries(this.currentPage)
  }


  showTvSeries(page:number): void{
    window.scrollTo(0,0)
    this._tvShowService.getSeries(this.endPoint,page).subscribe({
      next:(response) => {
      this.tvSeries = response.results;
      this.pages = Array(this.totalPages).fill(0).map((x, i) => i + 1);
      this.currentPage = page;
    }
  });
  }
}
