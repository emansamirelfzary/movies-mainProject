import { Pipe, PipeTransform } from '@angular/core';
import { Casting } from '../interfaces/casting';

@Pipe({
  name: 'removeNullPerson'
})
export class RemoveNullPersonPipe implements PipeTransform {

  transform(Casting:Casting[]): Casting[] {

    return Casting.filter(casting=>
      casting.profile_path !==null );

}
}
