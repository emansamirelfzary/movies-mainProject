import { Pipe, PipeTransform } from '@angular/core';
import { TvCredits } from '../interfaces/tv-credits';

@Pipe({
  name: 'removeNullTv'
})
export class RemoveNullTvPipe implements PipeTransform {

  transform(personTv:TvCredits[]): TvCredits[] {

    return  personTv.filter(tv=>
        tv.poster_path !==null );
  
  
  
  }

}
