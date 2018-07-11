import { Component, OnInit } from '@angular/core';
import { IHSubNavConfig } from '../shared/interfaces';

@Component({
  selector: 'app-utm',
  templateUrl: './utm.component.html',
  styleUrls: ['./utm.component.scss']
})

export class UtmComponent implements OnInit {
  subNavConfig: Array<IHSubNavConfig>;
  constructor() {
    this.subNavConfig = [
      {
        label: 'Generate',
        target: '../utm'
      },
      {
        label: 'Mediums',
        target: 'mediums'
      },
      {
        label: 'Sources',
        target: 'sources'
      },
      {
        label: 'Campaigns',
        target: 'campaigns'
      },
      {
        label: 'Content',
        target: 'content'
      }
    ];
  }
  ngOnInit() {}
}
