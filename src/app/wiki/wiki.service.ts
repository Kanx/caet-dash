import { Injectable } from '@angular/core';
import { SharepointService } from '../shared/services/sharepoint.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class WikiService {

  public topicList: any;
  private listName = 'WikiContent';

  constructor(private sp: SharepointService) {}

  private shouldBeUpdated = new Subject<boolean>();
  updateService$ = this.shouldBeUpdated.asObservable();


  getPrimaryTopics() {
    return this.sp.getListItems('WikiPrimaryTopics').map(data => data.d.results);
  }

  createPrimaryTopic(title, id) {
    return this.sp.createListItem('WikiPrimaryTopics', {Title: title, PrimaryTopicID: id});
  }

  updatePrimaryTopic(id, newTitle) {
    return this.sp.updateListItem('WikiPrimaryTopics', id, {
      Title: newTitle
    });
  }

  getSecondaryTopics() {
    return this.sp.getListItems('WikiSecondaryTopics').map(data => data.d.results);
  }

  createSecondaryTopic(title, sid, pid) {
    return this.sp.createListItem('WikiSecondaryTopics', {Title: title, SecondaryTopicID: sid, PrimaryTopicID: pid});
  }

  updateSecondaryTopic(id, newTitle, newPrimaryTopicId?) {
    let data =  {
      Title: newTitle
    };
    if (newPrimaryTopicId) {
      data = Object.assign(data, {PrimaryTopicID: newPrimaryTopicId});
    }
    return this.sp.updateListItem('WikiSecondaryTopics', id, data);
  }

  notifySubscribers() {
    this.shouldBeUpdated.next(true);
  }

  getArticles() {
    return this.sp.getListItems(this.listName, 'Title,ID,Category').map(data => data.d.results);
  }

  getArticle(id) {
    return this.sp.getListItem(this.listName, id).map(data => data.d);
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
