import { Component,Input, OnInit } from '@angular/core';
import { CastingService } from '../../services/casting.service';
import { Casting } from '../../interfaces/casting';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-casting',
  templateUrl: './casting.component.html',
  styleUrls: ['./casting.component.css']
})
export class CastingComponent implements OnInit{

  constructor(private _castingService:CastingService){}

  mediaCasting:Casting[]=[]
  personImg:string='http://image.tmdb.org/t/p/w500/'

  @Input() mediaId:number=0
  @Input() endPoint:string=''
  @Input() mediaName:string=''

  ngOnInit(): void {

    this._castingService.getMovieCasting(this.mediaId,this.endPoint).subscribe({
      next:(response)=>{
        this.mediaCasting=response.cast
        console.log(response.crew)
      }
    })


  }


  customOptions: OwlOptions = {
    loop:false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 400,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    slideBy:7,
    responsive: {
      0: {
        items: 2,
        margin:5
      },
      400: {
        items: 3,
        margin:10
      },
      600:{
        items:4,
        margin:10
      },
      740: {
        items: 5,
        margin:20
      },
      940: {
        items: 7,
        margin:20,
      }
    },
    nav: true
  }
}


