import { Component, OnInit } from '@angular/core';
import { SharepointService } from '../services/sharepoint.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public filesAndFolders: Array<any>;
  public user = {};

  private getFilesAndFolders(response) {
    return response.d.results.map(item => {
      const itemType = (item.Folder.hasOwnProperty('__metadata')) ? 'Folder' : 'File';
      return {
        title: item.FileLeafRef,
        type: itemType,
        url: item[itemType].ServerRelativeUrl
      };
    });
  }

  constructor(private sp: SharepointService, public userService: UserService) { }

  ngOnInit() {
    // this.userService.getUser().subscribe(data => {
    //   this.user = data;
    // });
    // this.sp.getAllFilesAndFolders('Documents').subscribe(data => {
    //   this.filesAndFolders = this.getFilesAndFolders(data);
    // });
  }
}
