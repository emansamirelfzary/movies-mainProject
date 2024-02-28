import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from 'src/app/movies/interface/movie';

@Pipe({
  name: 'removeNullMovies'
})
export class RemoveNullMoviesPipe implements PipeTransform {

  transform(movies: Movie[]): Movie[] {

    return movies.filter(movies=>
      movies.poster_path !==null);
  }

}
