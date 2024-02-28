import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/movies/interface/movie';
import { MoviesService } from 'src/app/movies/services/movies.service';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css'],


})
export class MainSliderComponent implements OnInit{
  constructor(private _moviesServics:MoviesService,config: NgbCarouselConfig){
    config.interval = 8000;
		config.wrap = true
		config.keyboard = false;
		config.pauseOnHover = false;}

  sliderMovies:Movie[]=[]
  moviebg='https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/'


  ngOnInit(): void {
    this._moviesServics.getTrendingMovies(1).subscribe({
      next:(responses)=>{

        console.log(responses.results)

      this.sliderMovies=responses.results.splice(0,5)
      console.log(this.sliderMovies)

    }
    })


  }



}
