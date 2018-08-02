import { Component, OnInit } from '@angular/core';
import { WikiService } from './wiki.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss'],
  providers: [WikiService]
})
export class WikiComponent implements OnInit {
  wikiArticles: any;

  constructor(private wikiService: WikiService, private router: Router) { }

  ngOnInit() {
    this.wikiService.updateService$.subscribe(() => {
      this.wikiService.getArticles().subscribe(articles => this.wikiArticles = articles);
    });

    this.wikiArticles = [];
    this.wikiService.getArticles().subscribe(articles => {
      this.wikiArticles = articles;
      console.log('articles', this.wikiArticles);
    });

    this.router.events.subscribe(() =>  window.scrollTo(0, 0));
  }

}
