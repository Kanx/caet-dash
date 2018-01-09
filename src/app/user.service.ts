import {Injectable} from '@angular/core';
import {SharepointService} from './shared/services/sharepoint.service';

@Injectable()
export class UserService {
  public user: any;

  constructor(private sp: SharepointService) { }

  getUser() {
    return this.sp.getCurrentUser();
  }



}
