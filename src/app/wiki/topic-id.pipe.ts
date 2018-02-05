import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topicId'
})
export class TopicIdPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return '';
    }
    return value.replace(/[^A-Za-z]/g, '').toUpperCase().substring(0, 3);
  }

}
