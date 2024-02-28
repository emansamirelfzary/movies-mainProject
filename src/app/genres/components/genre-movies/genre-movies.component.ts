import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { GenresService } from '../../services/genres.service';
import { Movie } from 'src/app/movies/interface/movie';

@Component({
  selector: 'app-genre-movies',
  templateUrl: './genre-movies.component.html',
  styleUrls: ['./genre-movies.component.css']
})
export class GenreMoviesComponent implements OnInit{

  currentPage: number = 1;
  pages:number[]=[]
  totalPages:number=5
  genreMovies:Movie[]=[]
  movieImg='http://image.tmdb.org/t/p/w500/'

  @Input() genreId:number=0

  @Output() genreMoviesChanged = new EventEmitter<Movie[]>();

  constructor(private _genresService:GenresService){}

  ngOnInit(): void {

    this.showGenreMovies(this.currentPage);

  }


  showGenreMovies(page:number): void{
    window.scrollTo(0,0)
    this._genresService.getGenreMovies(this.genreId,page).subscribe({
      next:(response) => {
      this.genreMovies = response.results;
      this.pages = Array(this.totalPages).fill(0).map((x, i) => i + 1);
      this.currentPage = page;
      this.genreMoviesChanged.emit(response.results)
      console.log(this.genreMoviesChanged)
    }
  });
  }
}
