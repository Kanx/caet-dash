import {Injectable} from '@angular/core';
import {SharepointService} from './sharepoint.service';
import {IUser} from '../interfaces';

@Injectable()
export class UserService {
  public user: IUser;
  public users: Map<number, IUser>;

  constructor(private sp: SharepointService) {}

  getUser() {
    return this.sp.getCurrentUser();
  }
  getUserById(id: number) {
    if (this.users.get(id)) {
      return this.users.get(id);
    } else {
      return this.sp.getUserById(id).subscribe((user: IUser) => this.users.set(user.ID, user));

    }
  }

    private cacheUser(user: IUser) {
      this.users.set(user.ID, user);
    }

}
