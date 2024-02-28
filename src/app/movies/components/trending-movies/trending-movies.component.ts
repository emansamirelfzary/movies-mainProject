import { Component, OnInit,OnDestroy } from '@angular/core';
import { Movie } from '../../interface/movie';
import { MoviesService } from '../../services/movies.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.css','../movies/movies.component.css']
})
export class TrendingMoviesComponent implements OnInit{

  trendingMovies:Movie[]=[]
  movieImg='http://image.tmdb.org/t/p/w500/'
  currentPage: number = 1;
  pages:number[]=[]
  totalPages:number=4


  constructor(private _moviesService:MoviesService){}

  ngOnInit(): void {


    this.showTrendingMovies(this.currentPage)

  }

  showTrendingMovies(page:number){
    window.scrollTo(0,0)
     this._moviesService.getTrendingMovies(page).subscribe({
        next:(response) => {
          this.trendingMovies = response.results;
          this.pages = Array(this.totalPages).fill(0).map((x, i) => i + 1);
          this.currentPage = page;
        }
      })
  }

}
