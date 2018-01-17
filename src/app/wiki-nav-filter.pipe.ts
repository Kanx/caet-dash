import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wikiNavFilter'
})
export class WikiNavFilterPipe implements PipeTransform {

  transform(items: any[], filter: string): any {
    let returnArray = [];
    if (!items || !filter) {
      return items;
    }
    returnArray = items.filter(item => {
      if (item !== '') {
        return item.Title.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
      }
    });

    return returnArray;
  }

}
