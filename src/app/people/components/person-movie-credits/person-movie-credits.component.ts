import { Component, OnInit, Input } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { MoviesCredits } from '../../interfaces/movies-credits';

@Component({
  selector: 'app-person-movie-credits',
  templateUrl: './person-movie-credits.component.html',
  styleUrls: ['./person-movie-credits.component.css']
})
export class PersonMovieCreditsComponent implements OnInit{

personMovies:MoviesCredits[]=[]
moviesCredits:MoviesCredits[]=[]
movieImg='http://image.tmdb.org/t/p/w500/'
seeAll:boolean=false


  constructor(private _peopleService:PeopleService) {

  }

  @Input() personId:number=0

  ngOnInit(): void {

    this._peopleService.getPersonMovies(this.personId).subscribe({
      next:(reaponse)=>{
        this.moviesCredits=reaponse.cast
        const filteredMovies =this.moviesCredits.sort((a,b) => {
          const yearA= a.release_date.split('-').slice(0,1);
          const yearB= b.release_date.split('-').slice(0,1);
          return Number (yearA) - Number (yearB)
        })

        this.personMovies=filteredMovies
        console.log(this.personMovies)
      }
    })

  }

}
