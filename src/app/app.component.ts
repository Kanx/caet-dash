import {Component, OnInit} from '@angular/core';
import { SharepointService } from './shared/services/sharepoint.service';
import {UserService} from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  res: any;

  constructor(private sp: SharepointService, public us: UserService) {}

  ngOnInit() {
    this.us.getUser();
  }
}
