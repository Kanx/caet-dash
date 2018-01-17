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
    // this.sp.getAllFilesAndFolders('Shared Documents').subscribe(data => {
    //   console.log(data);
    //   this.res = data;
    // });
  }
}
