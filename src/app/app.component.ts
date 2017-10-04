import { Component } from '@angular/core';
import { SharepointService } from './shared/sharepoint.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  res: any;
  constructor(private sp: SharepointService) {}

  create() {
    this.sp.createListItem('AdvertData', {
      'Title': 'Test',
      'Content': 'Some body copy'
    }).then(
      data => this.res = data
    );
  }

  read() {
    this.sp.getListItems('AdvertData').subscribe(data => {
      this.res = data;
    });
  }

  update() {
    this.sp.updateListItem('AdvertData', 1, { 'Title': 'Just updated'})
      .then(data => this.res = data);
  }

}
