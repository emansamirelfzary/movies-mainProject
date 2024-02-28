import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { GenresService } from '../../services/genres.service';
import { TvSeries } from 'src/app/tv-show/interface/tv-series';
@Component({
  selector: 'app-genre-tv',
  templateUrl: './genre-tv.component.html',
  styleUrls: ['./genre-tv.component.css','../genre-movies/genre-movies.component.css']
})
export class GenreTvComponent {

  currentPage: number = 1;
  pages:number[]=[]
  totalPages:number=5
  genreTvs:TvSeries[]=[]
  tvImg='http://image.tmdb.org/t/p/w500/'

  @Input() genreId:number=0

  @Output() genreTvsChanged = new EventEmitter<TvSeries[]>();

  constructor(private _genresService:GenresService){}

  ngOnInit(): void {

    this.showGenreTvs(this.currentPage);

  }


  showGenreTvs(page:number): void{
    window.scrollTo(0,0)
    this._genresService.getGenreTvs(this.genreId,page).subscribe({
      next:(response) => {
      this.genreTvs = response.results;
      this.pages = Array(this.totalPages).fill(0).map((x, i) => i + 1);
      this.currentPage = page;
      this.genreTvsChanged.emit(response.results)
      console.log(response)
    }
  });
  }
}
