import { Component, OnInit } from '@angular/core';
import { SharepointService } from '../services/sharepoint.service';
import { UserService } from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  navItems: Array<any>;

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

  constructor(private router: Router) {
    this.navItems = [
      {
        label: 'wiki',
        route: 'wiki',
        icon: 'fa-wikipedia-w'
      },
      {
        label: 'utm',
        route: 'utm',
        icon: 'fa-wpforms'
      },
    ];
  }

  ngOnInit() {}
}
