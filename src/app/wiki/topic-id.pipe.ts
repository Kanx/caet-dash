import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topicid'
})
export class TopicIdPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return '';
    }
    return value.replace(/\s/g, '-').toUpperCase();
  }

}
