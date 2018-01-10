import {Injectable} from '@angular/core';
import {SharepointService} from '../shared/services/sharepoint.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UtmService {
  constructor(private sp: SharepointService) { }

  getSources() {
    return this.sp.getListItems('UTMSources');
  }

  getCampaigns() {
    return this.sp.getListItems('UTMCampaigns');
  }

  getContent() {
    return this.sp.getListItems('UTMContent');
  }
}
