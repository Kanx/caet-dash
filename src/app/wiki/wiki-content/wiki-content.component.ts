import { Component, OnInit } from '@angular/core';
import {WikiService} from '../wiki.service';
import {ActivatedRoute} from '@angular/router';
import {IWikiArticle} from '../../shared/interfaces';

@Component({
  selector: 'app-wiki-content',
  templateUrl: './wiki-content.component.html',
  styleUrls: ['./wiki-content.component.scss']
})
export class WikiContentComponent implements OnInit {
  article: IWikiArticle;
  articleId: number;

  constructor(private wikiService: WikiService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.article = {
      Content: '',
      Title: '',
      TopicID: '',
      ID: null
    };

    this.route.params.subscribe((val) => {
      this.articleId = val.id;
      this.wikiService.getArticle(this.articleId).subscribe(article => {
        this.article = article;
      });
    });
  }

}
