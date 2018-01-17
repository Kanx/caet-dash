import { Component, OnInit } from '@angular/core';
import { WikiService } from './wiki.service';
import { SharepointService } from '../shared/services/sharepoint.service';
import {WikiNavItem} from './wiki.interface';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss'],
  providers: [WikiService]
})
export class WikiComponent implements OnInit {
  editorContent: any;
  wikiArticles: any;

  constructor(private wikiService: WikiService) { }

  ngOnInit() {
    this.wikiService.updateService$.subscribe(data => {
      this.wikiService.getArticles().subscribe(articles => this.wikiArticles = articles);


    });

    this.wikiArticles = [];
    this.wikiService.getArticles().subscribe(articles => {
      this.wikiArticles = articles;
    });
  }

  onChange($event) {
    // console.log($event);
  }
  onFocus() {}
  onBlur() {}
  onReady() {}

}
