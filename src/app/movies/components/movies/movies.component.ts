import { Component, OnInit,OnDestroy } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interface/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class moviesComponent implements OnInit{

  constructor(private _moviesService:MoviesService, private _activatedRoute:ActivatedRoute) {
  }

  endPoint:any=''
  movies:Movie[]=[]
  movieImg='http://image.tmdb.org/t/p/w500/'
  currentPage: number = 1;
  pages:number[]=[]
  totalPages:number=5

  ngOnInit(): void {

    this.endPoint=this._activatedRoute.snapshot.routeConfig?.path
    console.log(this.endPoint)

    this.showMovies(this.currentPage);
  }


  showMovies(page:number): void{
    window.scrollTo(0,0)
    this._moviesService.getMovies(this.endPoint,page).subscribe({
      next:(response) => {
      this.movies = response.results;
      this.pages = Array(this.totalPages).fill(0).map((x, i) => i + 1);
      this.currentPage = page;
    }
  });
  }
 
  
  

}
