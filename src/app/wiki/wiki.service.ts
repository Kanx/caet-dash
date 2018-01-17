import { Injectable } from '@angular/core';
import { SharepointService } from '../shared/services/sharepoint.service';
import {WikiNavItem} from './wiki.interface';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class WikiService {
  public topicList: Array<string>;
  private listName = 'WikiContent';
  constructor(private sp: SharepointService) {
    this.topicList = [
      'Photoshop',
      'Talemetry'
    ];
  }

  private shouldBeUpdated = new Subject<boolean>();

  updateService$ = this.shouldBeUpdated.asObservable();

  notifySubscribers() {
    this.shouldBeUpdated.next(true);
  }


  getArticles() {
    return this.sp.getListItems(this.listName, 'Title,ID,Category').map(data => data.d.results);
  }

  getArticle(id) {
    return this.sp.getListItem(this.listName, id).map(data => {
      return data.d;
    });
  }

  createArticle(article: object) {
    return this.sp.createListItem(this.listName, article);
  }

  updateArticle(article) {
    return this.sp.updateListItem(this.listName, article.ID, {
      Title: article.Title,
      Content: article.Content
    });
  }

  deleteArticle(id) {
    return this.sp.deleteListItem(this.listName, id);
  }
}
