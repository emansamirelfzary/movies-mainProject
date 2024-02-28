import { Component, OnInit,Input } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { TvCredits } from '../../interfaces/tv-credits';

@Component({
  selector: 'app-person-tv-credits',
  templateUrl: './person-tv-credits.component.html',
  styleUrls: ['./person-tv-credits.component.css','../person-movie-credits/person-movie-credits.component.css']
})
export class PersonTvCreditsComponent implements OnInit {

personTv:TvCredits[]=[]
tvCredits:TvCredits[]=[]
seriesImg='http://image.tmdb.org/t/p/w500/'
seeAll:boolean=false


  constructor(private _peopleService:PeopleService) {

  }

  @Input() personId:number=0

  ngOnInit(): void {

    this._peopleService.getPersonTv(this.personId).subscribe({
      next:(reaponse)=>{

        this.tvCredits=reaponse.cast
        const filteredMovies =this.tvCredits.sort((a,b) => {
          const yearA= a.first_air_date.split('-').slice(0,1);
          const yearB= b.first_air_date.split('-').slice(0,1);
          return Number (yearA) - Number (yearB)
        })

        this.personTv=filteredMovies
        console.log(reaponse)
      }
    })

  }
}
