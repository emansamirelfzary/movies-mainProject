import { Component, OnInit } from '@angular/core';
import { TvSeries } from 'src/app/tv-show/interface/tv-series';
import { TvShowService } from 'src/app/tv-show/services/tv-show.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-tv',
  templateUrl: './home-tv.component.html',
  styleUrls: ['./home-tv.component.css']
})
export class HomeTvComponent implements OnInit{

  homeTvSeries:TvSeries[]=[]
  seriesImg='http://image.tmdb.org/t/p/w500/'


  constructor(private _tvShowService:TvShowService){}

  ngOnInit(): void {
      this._tvShowService.getTrendingSeries(1).subscribe({
        next:(response)=>{
          this.homeTvSeries=response.results
          console.log(this.homeTvSeries)
        }
      })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay:true,
    autoplaySpeed:700,
    autoplayHoverPause:true,
    margin:25,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
