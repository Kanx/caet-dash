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
    this.sp.___createListItem('AdvertData', {
      'Title': 'Test',
      'Content': 'Some body copy'
    }).then(data => this.res = data );
  }

  read() {
    this.sp.getListItems('AdvertData').subscribe(data => {
      this.res = data;
    });
  }

  readOne(id: number) {
    this.sp.getListItem('AdvertData', id).subscribe(data => {
      this.res = data;
    });
  }

  update() {
    this.sp.updateListItem('AdvertData', 1, { 'Title': 'Just updated'})
      .then(data => this.res = data);
  }

  delete(id: number) {
    this.sp.deleteListItem('AdvertData', id)
      .then(data => this.res = data);
  }

}
