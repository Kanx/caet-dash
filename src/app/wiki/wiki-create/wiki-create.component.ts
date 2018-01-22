import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {DoomsayerService} from '../../shared/doomsayer/doomsayer.service';
import {WikiService} from '../wiki.service';
import {ISecondaryTopic} from '../../shared/interfaces';

@Component({
  selector: 'app-wiki-create',
  templateUrl: './wiki-create.component.html',
  styleUrls: ['./wiki-create.component.scss']
})
export class WikiCreateComponent implements OnInit {
  title: string;
  content: string;
  category: string;
  secondaryTopics: ISecondaryTopic[];

  constructor(private wikiService: WikiService, private router: Router, private doomSayer: DoomsayerService) {}

  ngOnInit() {
    this.wikiService.getSecondaryTopics().subscribe(data => {
      this.secondaryTopics = data;
    });
  }

  createArticle() {
    this.wikiService.createArticle({Title: this.title, Content: this.content, Category: this.category}).then(data => {
      this.wikiService.notifySubscribers();
      this.doomSayer.success('Article created');
      this.router.navigate(['wiki/post/' + data.ID]);
    });
  }

}
