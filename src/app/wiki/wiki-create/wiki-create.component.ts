import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DoomsayerService} from '../../doomsayer/doomsayer.service';
import {WikiArticle} from '../wiki.interface';
import {WikiService} from '../wiki.service';

@Component({
  selector: 'app-wiki-create',
  templateUrl: './wiki-create.component.html',
  styleUrls: ['./wiki-create.component.scss']
})
export class WikiCreateComponent implements OnInit {
  title: string;
  content: string;
  category: string;
  topics: string[];

  constructor(private wikiService: WikiService, private router: Router, private doomSayer: DoomsayerService) {}

  ngOnInit() {
    this.topics = this.wikiService.topicList;
  }

  createArticle() {
    this.wikiService.createArticle({Title: this.title, Content: this.content, Category: this.category}).then(data => {
      this.wikiService.notifySubscribers();
      this.doomSayer.success('Article created');
      this.router.navigate(['wiki/post/' + data.d.ID]);
    });
  }

}
