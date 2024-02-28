import { Component, Input} from '@angular/core';
import { Person } from 'src/app/people/interfaces/person';

@Component({
  selector: 'app-people-search-results',
  templateUrl: './people-search-results.component.html',
  styleUrls: ['./people-search-results.component.css','../movies-search-results/movies-search-results.component.css']
})
export class PeopleSearchResultsComponent {

  @Input() peoplesSearchResults:Person[]=[]

  personImg='http://image.tmdb.org/t/p/w500/'

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
