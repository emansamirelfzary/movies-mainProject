import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../../services/people.service';
import { Person } from '../../interfaces/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit{
  personId:number=0
  personInfo:Person ={} as Person
  personImg='http://image.tmdb.org/t/p/w500/'
  imbdUrl:string=''
  showMore:boolean=false
  maxLinesToShow:number=3

  constructor(private _activatedRoute:ActivatedRoute, private _peopleService:PeopleService){}

  ngOnInit(): void {

     this._activatedRoute.paramMap.subscribe({
    next:(response:any)=>{
      this.personId=response.params.id
    }
  })

  this._peopleService.getPeron(this.personId).subscribe({
    next:(response)=>{
      this.personInfo=response
      this.imbdUrl=`https://www.imdb.com/name/${this.personInfo.imdb_id}/`
      console.log(this.personInfo)

    }
  })


  }


  getGenderText(gender: number): string {
    switch (gender) {
      case 0:
        return 'Unknown';
      case 1:
        return 'Female';
      case 2:
        return 'Male';
      default:
        return 'Unknown';
    }
  }
}
