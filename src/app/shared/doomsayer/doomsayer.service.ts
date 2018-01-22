import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class DoomsayerService {

  constructor() { }

  private notify = new Subject<any>();
  doomsayer$ = this.notify.asObservable();

  info(message: string) {
    this.notify.next({ message, theme: 'info'});
  }

  success(message: string) {
    this.notify.next({ message, theme: 'success'});
  }

  danger(message: string) {
    this.notify.next({ message, theme: 'danger'});
  }
}
