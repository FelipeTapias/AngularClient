import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[] = [], property: string | string[], searchText: string) {
    const searchIndex = Array.isArray(property) ? property : [property];

    if( searchText ){
      return items.filter( item => {
        let stringToSearch = '';
        searchIndex.forEach( prop => stringToSearch += item[prop] );
        return stringToSearch.toLowerCase().search(searchText.toLowerCase()) >= 0;
      })
    } else {
      return items
    }
  }
}
