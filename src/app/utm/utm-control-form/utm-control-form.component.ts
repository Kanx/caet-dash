import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { UtmService } from '../utm.service';
import {DoomsayerService} from '../../doomsayer/doomsayer.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-utm-control-form',
  templateUrl: './utm-control-form.component.html',
  styleUrls: ['./utm-control-form.component.scss']
})
export class UtmControlFormComponent implements OnInit {
  selectedComponentName: string;
  singularComponentName: string;
  newComponentName: string;
  mediums: Array<any>;
  mediumFormSetup: Array<any>;
  boundMedium: string;
  utmControlForm: FormGroup;

  @Output() componentAdded = new EventEmitter<any>();

  constructor(private router: Router, private utmService: UtmService, private doomService: DoomsayerService, private fb: FormBuilder) {
    this.mediumFormSetup = [];
    switch (this.router.url.split('/')[2]) {
      case 'campaigns':
        this.selectedComponentName = 'Campaigns';
        this.singularComponentName = 'Campaign';
        break;
      case 'sources':
        this.selectedComponentName = 'Sources';
        this.singularComponentName = 'Source';
        this.mediumFormSetup = ['', Validators.required];
        break;
      case 'content':
        this.selectedComponentName = 'Content';
        this.singularComponentName = 'Content';
        break;
      default:
    }
    this.mediums = this.utmService.mediums;
  }

  ngOnInit() {
    this.utmControlForm = this.fb.group({
      newComponentName: ['', Validators.required],
      medium: this.mediumFormSetup
    });
  }

  submitNewComponent() {
    const componentName = this.utmControlForm.get('newComponentName').value;
    const selectedMedium = this.utmControlForm.get('medium').value;

    switch (this.router.url.split('/')[2]) {
      case 'content':
        this.utmService.createContent(componentName).then(() => this.utmService.notifySubscribers());
        break;
      case 'campaigns':
        this.utmService.createCampaign(componentName).then(() => this.utmService.notifySubscribers());
        break;
      case 'sources':
        this.utmService.createSource(componentName, selectedMedium).then(() => this.utmService.notifySubscribers());
        break;
      default:
    }

    this.doomService.success(`"${componentName}" added to ${this.selectedComponentName.toLowerCase()}`);
    this.utmControlForm.reset();
  }

}

