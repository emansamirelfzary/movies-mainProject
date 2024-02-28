import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeNullImg'
})
export class RemoveNullImgPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
