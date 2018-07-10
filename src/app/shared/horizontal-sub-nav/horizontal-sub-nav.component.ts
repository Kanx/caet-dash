import { Component } from '@angular/core';
import {IHSubNavConfig} from '../interfaces';
import {Input} from '@angular/core';

@Component({
  selector: 'app-horizontal-sub-nav',
  templateUrl: './horizontal-sub-nav.component.html',
  styleUrls: ['./horizontal-sub-nav.component.scss']
})
export class HorizontalSubNavComponent {
  @Input() config: Array<IHSubNavConfig>;
}
