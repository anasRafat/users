import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(arr: any[], text_search: number): any[] {
    if (text_search == undefined  ) {
      return arr;
    } else if(text_search>0) {
      return arr.filter( (arr) =>{
        return arr.id==text_search;
      });
    }
    else{
      return arr;
    }
  }
}
