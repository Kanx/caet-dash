import {Injectable} from '@angular/core';
import {SharepointService} from '../shared/services/sharepoint.service';
import { Observable } from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UtmService {
  constructor(private sp: SharepointService) { }

  public mediums = [
    'organic social',
    'sponsored social',
    'ppc',
    'paid job board',
    'email',
    'aggregator job board',
    'display'
  ];

  private shouldBeUpdated = new Subject<boolean>();
  updateService$ = this.shouldBeUpdated.asObservable();

  notifySubscribers() {
    this.shouldBeUpdated.next(true);
  }

  getSources() {
    return this.sp.getListItems('UTMSources').map(data => data.d.results);
  }

  createSource(source: string, medium: string) {
    return this.sp.createListItem('UTMSources', { Title: source, Medium: medium });
  }

  getCampaigns() {
    return this.sp.getListItems('UTMCampaigns').map(data => data.d.results);
  }

  createCampaign(campaign: string) {
    return this.sp.createListItem('UTMCampaigns', { Title: campaign });
  }

  getContent() {
    return this.sp.getListItems('UTMContent').map(data => data.d.results);
  }

  createContent(content: string) {
    return this.sp.createListItem('UTMContent', { Title: content });
  }
}
