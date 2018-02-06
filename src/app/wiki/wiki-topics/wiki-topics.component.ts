import { Component, OnInit } from '@angular/core';
import { WikiService } from '../wiki.service';
import { DoomsayerService } from '../../shared/doomsayer/doomsayer.service';
import {IPrimaryTopic, ISecondaryTopic} from '../../shared/interfaces';

@Component({
  selector: 'app-wiki-topics',
  templateUrl: './wiki-topics.component.html',
  styleUrls: ['./wiki-topics.component.scss']
})
export class WikiTopicsComponent implements OnInit {
  displayAddNewPrimaryTopic = false;
  displayAddNewSecondaryTopic = false;

  primaryTopics:  IPrimaryTopic[] = [];
  secondaryTopics: ISecondaryTopic[] = [];

  newPrimaryTopicTitle: string;
  newPrimaryTopicID: string;

  newSecondaryTopicTitle: string;
  newSecondaryTopicPrimaryID: string;
  newSecondaryTopicID: string;


  constructor(private wikiService: WikiService, private doom: DoomsayerService) { }

  ngOnInit() {
    this.wikiService.getPrimaryTopics().subscribe(primaryTopics => {
      this.primaryTopics = primaryTopics;
    });
    this.wikiService.getSecondaryTopics().subscribe(secondaryTopics => {
      this.secondaryTopics = secondaryTopics;
    });

    this.wikiService.updateService$.subscribe(() => {
      this.wikiService.getPrimaryTopics().subscribe(primaryTopics => {
        this.primaryTopics = primaryTopics;
      });
      this.wikiService.getSecondaryTopics().subscribe(secondaryTopics => {
        this.secondaryTopics = secondaryTopics;
      });
    });
  }

  createPrimaryTopic(topicTitle) {
    const tid = topicTitle.replace(' ', '-').toUpperCase();

    this.wikiService.createPrimaryTopic(topicTitle, tid)
      .subscribe(() => {
        this.wikiService.notifySubscribers();
        this.doom.success('Primary topic created');
      }, (err) => {
        console.log('Non-unique value found (assumed), check error:', err);
        this.doom.danger('This topic already exists');

      });
  }

  updatePrimaryTopic(topic) {
    this.wikiService.updatePrimaryTopic(topic.ID, topic.Title)
      .subscribe(() => {
        this.wikiService.notifySubscribers();
        this.doom.success('Primary topic updated');
      });
  }

  createSecondaryTopic(topicTitle, pid) {
    // TODO Ensure topicID is unique
    const tid = topicTitle.replace(' ', '-').toUpperCase();

    this.wikiService.createSecondaryTopic(topicTitle, tid, pid)
      .subscribe(() => {
        this.wikiService.notifySubscribers();
        this.doom.success('Secondary topic created');
      }, (err) => {
        console.log('Non-unique value found (assumed), check error:', err);
        this.doom.danger('This topic already exists');
      });
  }

  updateSecondaryTopic(topic) {
    this.wikiService.updateSecondaryTopic(topic.ID, topic.Title, topic.PrimaryTopicID)
      .subscribe(() => {
        this.wikiService.notifySubscribers();
        this.doom.success('Secondary topic updated');
      });
  }

  toggleCreateState(topicType) {
    if (topicType === 'primary') {
      this.displayAddNewPrimaryTopic = !this.displayAddNewPrimaryTopic;
    } else {
      this.displayAddNewSecondaryTopic = !this.displayAddNewSecondaryTopic;
    }
  }

}
