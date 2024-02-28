import { Pipe, PipeTransform } from '@angular/core';
import { TvSeries } from '../interface/tv-series';

@Pipe({
  name: 'removeNull'
})
export class RemoveNullPipe implements PipeTransform {

  transform(tvSeries: TvSeries[]): TvSeries[] {

    return tvSeries.filter(series=>
      series.poster_path !==null && series.backdrop_path !==null);
  }

}
