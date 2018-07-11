import {Injectable} from '@angular/core';
import {SharepointService} from '../shared/services/sharepoint.service';
import { Observable } from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UtmService {
  constructor(private sp: SharepointService) { }

  private shouldBeUpdated = new Subject<boolean>();

  updateService$ = this.shouldBeUpdated.asObservable();

  notifySubscribers() {
    this.shouldBeUpdated.next(true);
  }

  getMediums() {
    return this.sp.getListItems('UTMMediums', `Title,ID`).map(data => data.d.results);
  }

  createMedium(medium: string) {
    return this.sp.createListItem('UTMMediums', { Title: medium });
  }

  updateMedium(medium: string, id: any) {
    return this.sp.updateListItem('UTMMediums', id, { Title: medium });
  }

  deleteMedium(id: any) {
    return this.sp.deleteListItem('UTMMediums', id);
  }

  getSources() {
    return this.sp.getListItems('UTMSources', `Title,ID,Medium`).map(data => data.d.results);
  }

  createSource(source: string, medium: string) {
    return this.sp.createListItem('UTMSources', { Title: source, Medium: medium });
  }

  updateSource(source: string, id: any) {
    return this.sp.updateListItem('UTMSources', id, { Title: source });
  }

  deleteSource(id: any) {
    return this.sp.deleteListItem('UTMSources', id);
  }

  getCampaigns() {
    return this.sp.getListItems('UTMCampaigns', `Title,ID`).map(data => data.d.results);
  }

  createCampaign(campaign: string) {
    return this.sp.createListItem('UTMCampaigns', { Title: campaign });
  }

  updateCampaign(campaign: string, id: any) {
    return this.sp.updateListItem('UTMCampaigns', id, { Title: campaign });
  }

  deleteCampaign(id: any) {
    return this.sp.deleteListItem('UTMCampaigns', id);
  }

  getContent() {
    return this.sp.getListItems('UTMContent', `Title,ID`).map(data => data.d.results);
  }

  createContent(content: string) {
    return this.sp.createListItem('UTMContent', { Title: content });
  }

  updateContent(content: string, id: any) {
    return this.sp.updateListItem('UTMContent', id, { Title: content });
  }

  deleteContent(id: any) {
    return this.sp.deleteListItem('UTMContent', id);
  }
}
