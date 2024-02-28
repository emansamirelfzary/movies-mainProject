import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interface/movie';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

  constructor(private _activatedRoute:ActivatedRoute, private _moviesService:MoviesService){}

  movieId:number=0
  movieImg='http://image.tmdb.org/t/p/w500/'
  moviebg='https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/'
  movieDetalis:Movie= {} as Movie
  imbdUrl:string=''
  ratingWidth:boolean=false
  mediaName:string='movie'
  endPoint:string='movie'

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe({
      next:(response:any)=>{
        this.movieId=response.params.id
      }
    })

    this._moviesService.getMovieDetails(this.movieId).subscribe({
      next:(response)=>{
        console.log(response)
        this.movieDetalis=response
        this.imbdUrl=`https://www.imdb.com/title/${this.movieDetalis.imdb_id}/`

      }
    })


  }

  @HostListener('window:scroll',['$event'])

  checkVisability() :void{
    const ratingSection = document.getElementById("rating-percentage") as HTMLElement;
    const distanceFromTop=ratingSection.offsetTop
    const scrollPosition=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (ratingSection.getBoundingClientRect().top < scrollPosition) {
      this.ratingWidth = true;
      console.log(distanceFromTop)
    }
    else{
      this.ratingWidth=false
    }
  }

}
