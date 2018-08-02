import {Injectable} from '@angular/core';
import {SharepointService} from './sharepoint.service';
import {IUser} from '../interfaces';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
  public user: IUser;
  users: Map<number, IUser>;

  constructor(private sp: SharepointService) {
    this.users = new Map();
  }

  getUser(): Observable<IUser> {
    return this.sp.getCurrentUser().map(data => data.d);
  }

  getUserByRacf(racf) {
    return this.sp.getUserByRacf(racf).map(data => data.d);
  }


}
