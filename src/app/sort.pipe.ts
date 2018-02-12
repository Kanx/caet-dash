import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: string): any {
    if (value) {
      if (args) {
        value.sort((a: any, b: any) => {
          let compareA, compareB;
          if (typeof a[args] ===  'string') { compareA = a[args].toLowerCase(); }
          if (typeof b[args] ===  'string') { compareB = b[args].toLowerCase(); }
          if (compareA < compareB) {
            return -1;
          } else if (compareA > compareB) {
            return 1;
          } else {
            return 0;
          }
        });
      } else {
        value.sort((a: any, b: any) => {
          let compareA, compareB;

          if (typeof a[args] ===  'string') { compareA = a[args].toLowerCase(); }
          if (typeof b[args] ===  'string') { compareB = b[args].toLowerCase(); }
          if (compareA < compareB) {
            return -1;
          } else if (compareA > compareB) {
            return 1;
          } else {
            return 0;
          }
        });
      }
    }


    return value;
  }

}
