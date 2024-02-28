import { Component,OnInit,HostListener } from '@angular/core';
import { TvShowService } from '../../services/tv-show.service';
import { ActivatedRoute } from '@angular/router';
import { TvSeries } from '../../interface/tv-series';

@Component({
  selector: 'app-tv-series-details',
  templateUrl: './tv-series-details.component.html',
  styleUrls: ['./tv-series-details.component.css']
})
export class TvSeriesDetailsComponent implements OnInit{

  constructor(private _tvShowService:TvShowService, private _activatedRoute:ActivatedRoute){
  }

  tvSeriesId:number=0
  tvSeriesImg='http://image.tmdb.org/t/p/w500/'
  tvSeriesbg='https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/'
  tvSeriesDetalis:TvSeries= {} as TvSeries
  ratingWidth:boolean=false
  mediaName:string='series'
  endPoint:string='tv'

  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe({
      next:(response:any)=>{
        this.tvSeriesId=response.params.id
      }
    })

    this._tvShowService.getSeriesDetails(this.tvSeriesId).subscribe({
      next:(response)=>{
        console.log(response)
        this.tvSeriesDetalis=response

      }
    })

  }

  @HostListener('window:scroll',['$event'])
  checkVisability() :void{
    const ratingSection = document.getElementById("rating-percentage") as HTMLElement;
    const scrollPosition=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (ratingSection.getBoundingClientRect().top < scrollPosition ) {
      this.ratingWidth = true;
    }
    else{
      this.ratingWidth=false
    }
  }
}
