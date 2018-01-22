import {Component, OnInit} from '@angular/core';
import { SharepointService } from './shared/services/sharepoint.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  res: any;

  constructor(private sp: SharepointService) {}

  ngOnInit() {
    // this.sp.getAllFilesAndFolders('Shared Documents').subscribe(data => {
    //   console.log(data);
    //   this.res = data;
    // });
  }
}
