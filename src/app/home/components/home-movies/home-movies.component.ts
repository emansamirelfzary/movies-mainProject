import { Component,OnInit } from '@angular/core';
import { Movie } from 'src/app/movies/interface/movie';
import { MoviesService } from 'src/app/movies/services/movies.service';

@Component({
  selector: 'app-home-movies',
  templateUrl: './home-movies.component.html',
  styleUrls: ['./home-movies.component.css','../../../movies/components/movies/movies.component.css']
})
export class homeMoviesComponent implements OnInit{

  constructor(private _movieServics:MoviesService){}
  homeMovies:Movie[]=[]
  movieImg='http://image.tmdb.org/t/p/w500/'


  ngOnInit(): void {
      this._movieServics.getMovies('movie/popular',1).subscribe({
        next:(response)=>{
         
          this.homeMovies=response.results.splice(0,5)
          console.log(this.homeMovies)

        }
      })
  }
}
