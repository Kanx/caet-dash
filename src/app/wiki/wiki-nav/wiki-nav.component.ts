import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {WikiNavItem} from '../wiki.interface';

@Component({
  selector: 'app-wiki-nav',
  templateUrl: './wiki-nav.component.html',
  styleUrls: ['./wiki-nav.component.scss']
})
export class WikiNavComponent implements OnInit, OnChanges {
  @Input()
  articles: WikiNavItem[];
  navItems: Array<any>;
  topics: Array<string>;
  keywordFilter: string;
  filterObject: Object;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    this.buildNavigation(changes.articles.currentValue);
  }

  buildNavigation(articles: WikiNavItem[]) {
    const navConstructor = {};
    this.navItems = [];
    if (articles.length) {
      // Get Unique topics in available articles
      this.topics = articles.map(article => article.Category).filter((val, index, self) => {
        return self.indexOf(val) === index;
      });
      for (const topics of this.topics) {
        navConstructor[topics] = {articles: [], Title: topics};
      }
      for (const article of articles) {
        navConstructor[article.Category].articles.push(article);
      }

      for (const category in navConstructor) {
        if (navConstructor.hasOwnProperty(category)) {
          this.navItems.push(navConstructor[category]);
        }
      }
    }
  }


}
