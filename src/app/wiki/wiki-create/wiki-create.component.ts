import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {DoomsayerService} from '../../shared/doomsayer/doomsayer.service';
import {WikiService} from '../wiki.service';
import {ISecondaryTopic} from '../../shared/interfaces';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-wiki-create',
  templateUrl: './wiki-create.component.html',
  styleUrls: ['./wiki-create.component.scss']
})
export class WikiCreateComponent implements OnInit {
  title: string;
  content: string;
  category: string;
  secondaryTopics: Observable<ISecondaryTopic[]>;

  constructor(private wikiService: WikiService,
              private router: Router,
              private doomSayer: DoomsayerService) {}

  ngOnInit() {
    this.wikiService.getSecondaryTopics().subscribe(secondaryTopics => {
      this.secondaryTopics = secondaryTopics;
    });
  }

  createArticle() {
    this.wikiService.createArticle({Title: this.title, Content: this.content, TopicID: this.category}).subscribe(data => {
      this.wikiService.notifySubscribers();
      this.doomSayer.success('Article created');
      this.router.navigate(['wiki/post/' + data.ID]);
    });
  }

}
