import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WikiService} from '../wiki.service';
import {IWikiArticle} from '../../shared/interfaces';
import {DoomsayerService} from '../../shared/doomsayer/doomsayer.service';
import {DialogService} from 'ng2-bootstrap-modal';
import {DialogModalComponent} from '../../shared/dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-wiki-editor',
  templateUrl: './wiki-editor.component.html',
  styleUrls: ['./wiki-editor.component.scss']
})
export class WikiEditorComponent implements OnInit {
  public article: IWikiArticle;

  constructor(private dialogService: DialogService,
              private route: ActivatedRoute,
              private wikiService: WikiService,
              private router: Router,
              private doomSayer: DoomsayerService) {}

  ngOnInit() {
    this.article = {
      Content: '',
      Title: '',
      TopicID: '',
      ID: null
    };

    this.route.params.subscribe((val) => {
      if (this.article.ID !== val.id) {
        const articleId = val.id;
        this.wikiService.getArticle(articleId).subscribe(data => {
          this.article = data;
        }, () => {
          this.router.navigate(['wiki']);
        });
      }

    });
  }

  saveChangesToArticle() {
    this.wikiService.updateArticle(this.article).then(() => {
      this.wikiService.notifySubscribers();
      this.doomSayer.success('Updates saved to SharePoint');
    });
  }

  deleteArticle() {
    this.dialogService.addDialog(DialogModalComponent, {
      title: 'Delete article',
      theme: 'danger',
      message: 'Are you sure you want to delete this article?'})
      .subscribe((isConfirmed) => {
        if (isConfirmed) {
          this.wikiService.deleteArticle(this.article.ID).then(() => {
            this.wikiService.notifySubscribers();
            this.doomSayer.danger('Article deleted');
            this.router.navigate(['wiki']);
          });
        }
      });

  }
}
