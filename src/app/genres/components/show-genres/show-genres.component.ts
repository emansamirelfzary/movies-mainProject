import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from 'src/app/movies/interface/movie';
import { TvSeries } from 'src/app/tv-show/interface/tv-series';

@Component({
  selector: 'app-show-genres',
  templateUrl: './show-genres.component.html',
  styleUrls: ['./show-genres.component.css']
})
export class ShowGenresComponent implements OnInit{

  genreId:number=0
  genreMovies:Movie[]=[]
  genreTvs:TvSeries[]=[]

  constructor(private _activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe({
      next:(response:any)=>{
        this.genreId=response.params.id
        console.log(this.genreId)
      }
    })



  }

    onGenreMoviesChanged(updatedGenreMovies: Movie[]) {
      this.genreMovies = updatedGenreMovies;
      console.log(this.genreMovies)
    }
    onGenreTvsChanged(updatedGenreTvs: TvSeries[]) {
      this.genreTvs = updatedGenreTvs;
    }
}
