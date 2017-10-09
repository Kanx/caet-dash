import { Component, OnInit } from '@angular/core';
import { WikiService } from './wiki.service';
import { SharepointService } from '../shared/services/sharepoint.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss'],
  providers: [WikiService]
})
export class WikiComponent implements OnInit {
  editorContent: any;
  public wikiContent: object;

  constructor(private wikiService: WikiService, private sp: SharepointService) { }

  ngOnInit() {}

  createWiki() {
    const wikiData = {
      'Content': this.editorContent,
      'Category': 'Some Cat',
      'Title': 'FooBaz'
    };
    console.log(wikiData);
    this.sp.createListItem('WikiData', wikiData);
  }

  getWikiContent() {
    this.sp.getListItems('WikiData').subscribe(data => { this.wikiContent = data });
  }

  onChange($event) {
    // console.log($event);
  }
  onFocus() {}
  onBlur() {}
  onReady() {}

}
