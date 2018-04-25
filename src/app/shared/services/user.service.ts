import {Injectable} from '@angular/core';
import {SharepointService} from './sharepoint.service';
import {IUser} from '../interfaces';

@Injectable()
export class UserService {
  public user: IUser;
  public users: Array<IUser>;

  constructor(private sp: SharepointService) { }

  getUser() {
    return this.sp.getCurrentUser();
  }
}
