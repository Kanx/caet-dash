import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wikiNavFilter'
})
export class WikiNavFilterPipe implements PipeTransform {
  transform(items: any[], filter: string): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => {
      if (item !== '') {
        return item.Title.toLowerCase().indexOf(filter.toLowerCase()) !== -1 || item.Content.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
      }
    });
  }

}

@Pipe({
  name: 'wikiNavDeepFilter'
})
export class WikiNavDeepFilterPipe implements PipeTransform {
  transform(secondaryTopicList: any[], inputFilter: string): any {
    const filter = inputFilter || '';
    if (!secondaryTopicList) {
      return secondaryTopicList;
    }

    let articleList = [];
    for (const topics of secondaryTopicList) {
      if (topics.Articles.length) {
        articleList = articleList.concat(topics.Articles);
      }
    }
    const returnArray = articleList.filter(item => {
      if (item !== '') {
        return item.Title.toLowerCase().indexOf(filter.toLowerCase()) !== -1 || item.Content.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
      }
    });
    return returnArray;
  }

}
