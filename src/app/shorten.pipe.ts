import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {
    let size = args[0];
    if(value.length>size){
      value= value.substring(0,size)+"..."
    }
    return value;
  }

}
