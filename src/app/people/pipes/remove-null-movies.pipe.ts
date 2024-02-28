import { Pipe, PipeTransform } from '@angular/core';
import { MoviesCredits } from '../interfaces/movies-credits';

@Pipe({
  name: 'removeNullMovies'
})
export class RemoveNullMoviesPipe implements PipeTransform {

  transform(personMovies:MoviesCredits[]): MoviesCredits[] {

  return  personMovies.filter(movies=>
      movies.poster_path !==null );



}

}
