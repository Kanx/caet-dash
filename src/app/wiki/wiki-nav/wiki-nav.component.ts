import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {WikiService} from '../wiki.service';
import {IWikiNavItem} from '../../shared/interfaces';

@Component({
  selector: 'app-wiki-nav',
  templateUrl: './wiki-nav.component.html',
  styleUrls: ['./wiki-nav.component.scss']
})
export class WikiNavComponent implements OnInit, OnChanges {
  @Input()
  articles: IWikiNavItem[];
  navItems: Array<any>;
  keywordFilter: string;

  constructor(private wikiService: WikiService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.articles.currentValue.length) {
      this.buildNavigation(changes.articles.currentValue);
    }
  }

  buildNavigation(articles: IWikiNavItem[]) {
      const mergedTopics = this.wikiService
        .getPrimaryTopics()
        .mergeMap(primaryTopicList => {
          return this.wikiService.getSecondaryTopics()
            .map(secondaryTopicList => {
              for (const primaryTopic of primaryTopicList) {
                primaryTopic.SecondaryTopics = secondaryTopicList.filter(secondaryTopic => {
                  return secondaryTopic.PrimaryTopicID === primaryTopic.PrimaryTopicID;
                });
              }
              return primaryTopicList;
            });
        });

      mergedTopics
        .subscribe(navConstruct => {
          for (const primaryTopic of navConstruct) {
            for (const secondaryTopic of primaryTopic.SecondaryTopics) {
              secondaryTopic.Articles = articles.map(article => {
                return {Title: article.Title, TopicID: article.TopicID, ID: article.ID, Content: article.Content};
              }).filter((val) => {
                return val.TopicID == secondaryTopic.SecondaryTopicID;
              });
            }
          }
          this.navItems = navConstruct;
        });
  }
}
