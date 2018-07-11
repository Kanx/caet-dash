import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {UtmService} from '../utm.service';
import {DoomsayerService} from '../../shared/doomsayer/doomsayer.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DialogService} from 'ng2-bootstrap-modal';
import {DialogModalComponent} from '../../shared/dialog-modal/dialog-modal.component';

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
  utmControlForm: FormGroup;
  existingComponents: Array<any>;
  updateMethod: any;
  deleteMethod: any;

  @Output() componentAdded = new EventEmitter<any>();

  initialise() {
    this.mediumFormSetup = [];
    switch (this.router.url.split('/')[2]) {
      case 'mediums':
        this.selectedComponentName = 'Mediums';
        this.singularComponentName = 'Medium';
        this.utmService.getMediums().subscribe(data => this.existingComponents = data);
        this.updateMethod = this.utmService.updateMedium;
        this.deleteMethod = this.utmService.deleteMedium;
        break;
      case 'campaigns':
        this.selectedComponentName = 'Campaigns';
        this.singularComponentName = 'Campaign';
        this.utmService.getCampaigns().subscribe(data => this.existingComponents = data);
        this.updateMethod = this.utmService.updateCampaign;
        this.deleteMethod = this.utmService.deleteCampaign;
        break;
      case 'sources':
        this.selectedComponentName = 'Sources';
        this.singularComponentName = 'Source';
        this.utmService.getMediums().subscribe(data => this.mediums = data);
        this.utmService.getSources().subscribe(data => this.existingComponents = data);
        this.updateMethod = this.utmService.updateSource;
        this.deleteMethod = this.utmService.deleteSource;
        this.mediumFormSetup = ['', Validators.required];
        break;
      case 'content':
        this.selectedComponentName = 'Content';
        this.singularComponentName = 'Content';
        this.utmService.getContent().subscribe(data => this.existingComponents = data);
        this.updateMethod = this.utmService.updateContent;
        this.deleteMethod = this.utmService.deleteContent;
        break;
      default:
    }
  }

  constructor(private router: Router,
              private dialogService: DialogService,
              private utmService: UtmService,
              private doomService: DoomsayerService,
              private fb: FormBuilder) {
    this.initialise();
  }

  ngOnInit() {
    this.utmControlForm = this.fb.group({
      newComponentName: ['', Validators.required],
      medium: this.mediumFormSetup
    });

    this.utmService.updateService$.subscribe(data => {
      this.initialise();
    });
  }

  updateComponent(component) {
    this.updateMethod.call(this.utmService, component.Title, component.ID).subscribe(() => {
      this.doomService.success(`${this.singularComponentName} updated` );
      this.utmService.notifySubscribers();

    });
  }

  deleteComponent(component) {
    this.dialogService.addDialog(DialogModalComponent, {
      title: 'Delete ' + this.singularComponentName,
      theme: 'danger',
      message: `Are you sure you want to delete this ${this.singularComponentName}?`})
      .subscribe((isConfirmed) => {
        if (isConfirmed) {
          this.deleteMethod.call(this.utmService, component.ID).subscribe(() => {
            this.doomService.danger(`${this.singularComponentName} deleted` );
            this.utmService.notifySubscribers();
          });
        }
      });
  }

  submitNewComponent() {
    const componentName = this.utmControlForm.get('newComponentName').value;
    const selectedMedium = this.utmControlForm.get('medium').value;

    switch (this.router.url.split('/')[2]) {
      case 'mediums':
        this.utmService.createMedium(componentName).subscribe(() => this.utmService.notifySubscribers());
        break;
      case 'content':
        this.utmService.createContent(componentName).subscribe(() => this.utmService.notifySubscribers());
        break;
      case 'campaigns':
        this.utmService.createCampaign(componentName).subscribe(() => this.utmService.notifySubscribers());
        break;
      case 'sources':
        this.utmService.createSource(componentName, selectedMedium).subscribe(() => this.utmService.notifySubscribers());
        break;
      default:
    }

    this.doomService.success(`"${componentName}" added to ${this.selectedComponentName.toLowerCase()}`);
    this.utmControlForm.reset();
  }

}

