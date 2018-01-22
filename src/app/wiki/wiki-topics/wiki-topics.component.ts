import { Component, OnInit } from '@angular/core';
import { WikiService } from '../wiki.service';
import { PrimaryTopic, SecondaryTopic } from '../wiki.interface';
import { DoomsayerService } from '../../shared/doomsayer/doomsayer.service';

@Component({
  selector: 'app-wiki-topics',
  templateUrl: './wiki-topics.component.html',
  styleUrls: ['./wiki-topics.component.scss']
})
export class WikiTopicsComponent implements OnInit {
  displayAddNewPrimaryTopic: boolean = false;
  displayAddNewSecondaryTopic: boolean = false;

  primaryTopics:  Array<PrimaryTopic> = [];
  secondaryTopics: Array<SecondaryTopic> = [];

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
  }

  createPrimaryTopic(topicTitle, topicID) {
    // Ensure topicID is unique
    let tid = topicID;
    const topicIdList = this.primaryTopics.map((pt) => pt.PrimaryTopicID);

    if (topicIdList.indexOf(topicID) !== -1) {
      tid = topicID + topicIdList.indexOf(topicID) + 1;
    }

    this.wikiService.createPrimaryTopic(topicTitle, tid)
      .then(() => {
        this.wikiService.notifySubscribers();
        this.doom.success('Primary topic created');
      });
  }

  updatePrimaryTopic(topic) {
    this.wikiService.updatePrimaryTopic(topic.ID, topic.Title)
      .then(() => {
        this.wikiService.notifySubscribers();
        this.doom.success('Primary topic updated');
      });
  }

  createSecondaryTopic(topicTitle, secondaryTopicID, pid) {
    // Ensure topicID is unique
    let tid = secondaryTopicID;
    const topicIdList = this.primaryTopics.map((pt) => pt.PrimaryTopicID);

    if (topicIdList.indexOf(secondaryTopicID) !== -1) {
      tid = secondaryTopicID + topicIdList.indexOf(secondaryTopicID) + 1;
    }

    this.wikiService.createSecondaryTopic(topicTitle, tid, pid)
      .then(() => {
        this.wikiService.notifySubscribers();
        this.doom.success('Secondary topic created');
      });
  }

  updateSecondaryTopic(topic) {
    this.wikiService.updateSecondaryTopic(topic.ID, topic.Title, topic.PrimaryTopicID)
      .then(() => {
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
