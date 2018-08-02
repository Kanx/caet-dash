import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {Router} from '@angular/router';
import {IUser} from '../interfaces';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  navItems: Array<any>;
  user: Observable<IUser>;

  constructor(private router: Router, private us: UserService) {
    this.user = this.us.getUser();
    this.navItems = [
      // {
      //   label: 'What\'s On',
      //   route: 'whats-on',
      //   icon: 'fal fa-chalkboard'
      // },
      {
        label: 'Team Wiki',
        route: 'wiki',
        icon: 'fal fa-book-open'
      },
      // {
      //   label: 'Files',
      //   route: 'files',
      //   icon: 'fal fa-file'
      // },
      {
        label: 'UTM Library',
        route: 'utm',
        icon: 'fab fa-wpforms'
      }
    ];
  }

  ngOnInit() {}
}
