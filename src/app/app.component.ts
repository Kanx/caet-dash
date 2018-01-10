import {Component, OnInit} from '@angular/core';
import { SharepointService } from './shared/services/sharepoint.service';
import {UtmService} from './utm/utm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  res: any;
  constructor(private sp: SharepointService, private utm: UtmService) {}

  ngOnInit() {

    // this.sp.getAllFilesAndFolders('Documents').subscribe(data => {
    //   console.log(data);
    // });

    // this.sp.getCurrentUser().subscribe(userData => {
    //   console.log(userData);
    // });
    //
    // this.sp.getUser('hornean').subscribe(userData => {
    //   console.log(userData);
    // });
  }

  create() {
    this.sp.createListItem('AdvertData', {
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
