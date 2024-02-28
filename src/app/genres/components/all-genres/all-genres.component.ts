import { Component, OnInit } from '@angular/core';
import { GenresService } from '../../services/genres.service';
import { Genres } from '../../interfaces/genres';
import { Movie } from 'src/app/movies/interface/movie';
import { TvSeries } from 'src/app/tv-show/interface/tv-series';
import { MoviesService } from 'src/app/movies/services/movies.service';
import { TvShowService } from 'src/app/tv-show/services/tv-show.service';
import { style, trigger, transition, animate,keyframes } from '@angular/animations';


@Component({
  selector: 'app-all-genres',
  templateUrl: './all-genres.component.html',
  styleUrls: ['./all-genres.component.css'],
  animations: [
    trigger('moviesslideAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-300%)' }),
        animate('2000ms', style({ transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('2000ms', style({ transform: 'translateY(-100%)' }))
      ])
    ]),
    trigger('tvslideAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('2000ms', style({ transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('2000ms', style({ transform: 'translateY(-100%)' }))
      ])
    ]),

  ]
 
    
})
export class AllGenresComponent implements OnInit {
  allGenres:Genres[]=[]
  trendingMovies:Movie[]=[]
  trendingTv:TvSeries[]=[]
  mediaImg='http://image.tmdb.org/t/p/w500/'
  responsiveOptions: any[]=[];
  currentIndex:number=0
  isPaused = false;
 



  constructor(private _genresService:GenresService, private _movieService:MoviesService, private _tvService:TvShowService){}

  ngOnInit(): void {
      this._genresService.getAllGenres().subscribe({
        next:(response)=>{
          console.log(response)
          this.allGenres=response.genres
        }
      })


      this._movieService.getTrendingMovies(1).subscribe({
        next:(response)=>{
          this.trendingMovies=response.results.splice(0,4)
          console.log(this.trendingMovies)
        }
      })
      
      this._tvService.getTrendingSeries(1).subscribe({
        next:(response)=>{
          this.trendingTv=response.results.splice(0,4)
        }
      })
  }


}
