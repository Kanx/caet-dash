import {Injectable} from '@angular/core';
import {SharepointService} from '../shared/services/sharepoint.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UtmService {
  constructor(private sp: SharepointService) { }

  getSources(): Observable<ArrayBuffer>  {
    return this.sp.getListItems('UTMSources');
  }

  getCampaigns(): Observable<ArrayBuffer>  {
    return this.sp.getListItems('UTMCampaigns');
  }

  getContent(): Observable<ArrayBuffer>  {
    return this.sp.getListItems('UTMContent');
  }
}
