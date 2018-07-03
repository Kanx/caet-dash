import {Injectable} from '@angular/core';
import {SharepointService} from './sharepoint.service';
import {IUser} from '../interfaces';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
  public user: IUser;
  users: Map<number, IUser>;

  constructor(private sp: SharepointService) {}

  getUser() {
    return this.sp.getCurrentUser();
  }

  getUserByRacf(racf) {
    return this.sp.getUserByRacf(racf);
  }

  getUserById(id: number) {
    if (this.users.get(id)) {
      return Observable.create(observer => {
        observer.next(this.users.get(id));
        observer.complete();
      });
    } else {
      return this.sp.getUserById(id).subscribe((user: IUser) => this.users.set(user.ID, user));

    }
  }

    private cacheUser(user: IUser) {
      this.users.set(user.ID, user);
    }

}
