import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UtmService } from './utm.service';
import { Source} from './source.class';
import { LocalStorageService } from 'ngx-webstorage';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {DoomsayerService} from '../doomsayer/doomsayer.service';

@Component({
  selector: 'app-utm',
  templateUrl: './utm.component.html',
  styleUrls: ['./utm.component.scss']
})

export class UtmComponent implements OnInit {
  utmForm: FormGroup;
  sources: Array<any>;
  mediums: Array<string>;
  campaigns: Array<any>;
  contentList: Array<any>;
  filteredSources: Array<Source>;
  previousMedium = '';
  generatedUrl: string;
  utmHistory: Array<string>;
  childRouteActive: boolean;

  constructor(private router: Router,
              private utmService: UtmService,
              private fb: FormBuilder,
              private storage: LocalStorageService,
              public doomSayer: DoomsayerService,
              private activeRoute: ActivatedRoute
  ) {}

  getDataFromService() {
    this.utmService.getMediums()
      .subscribe(data => this.mediums = data);

    this.utmService.getSources()
      .subscribe(data => this.sources = data);

    this.utmService.getCampaigns()
      .subscribe(data => this.campaigns = data);

    this.utmService.getContent()
      .subscribe(data => this.contentList = data);
  }


  ngOnInit() {
    this.getDataFromService();

    this.utmService.updateService$.subscribe(data => {
      this.getDataFromService();
      this.utmForm.patchValue({'medium': ''});
    })

    this.childRouteActive = !!this.activeRoute.children.length;

    this.router.events.subscribe(val => {
      this.childRouteActive = !!this.activeRoute.children.length;
    });

    this.utmForm = this.fb.group({
      url: ['',  Validators.compose([Validators.required, Validators.pattern('(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]\\.[^\\s]{2,})')])],
      medium: ['', Validators.required],
      source: [{ value: '', disabled: true }, Validators.required],
      campaign: ['', Validators.required],
      content: ''
    });

    this.utmForm.valueChanges.subscribe(val => {
      if (val.medium !== this.previousMedium) {
        this.filteredSources = this.sources.filter((source) => source.Medium === val.medium);
        this.previousMedium = val.medium;
        this.filteredSources.length ? this.utmForm.get('source').enable() : this.utmForm.get('source').disable();
      }
    });

    this.utmHistory = this.parseUtmHistory(this.storage.retrieve('utmHistory'));

    this.storage.observe('utmHistory')
      .subscribe((value) => {
        if (value) { this.utmHistory = value.split(','); }
      });
  }

  clearForm() {
    this.utmForm.reset();
  }

  generateUrl(): void {
    const baseUrlDelimiter = (this.utmForm.get('url').value.indexOf('?') === -1) ? '?' : '&';
    let utmString = this.utmForm.get('url').value +
                        baseUrlDelimiter +
                        `utm_medium=${this.utmForm.get('medium').value}&` +
                        `utm_source=${this.utmForm.get('source').value}&` +
                        `utm_campaign=${this.utmForm.get('campaign').value}`;

    if (this.utmForm.get('utm_content')) {
      utmString += `&utm_content=${this.utmForm.get('content').value}`;
    }

    this.generatedUrl = utmString.replace(/\s/, '+');

    const currentHistory = this.storage.retrieve('utmHistory');

    if (!currentHistory) {
      this.storage.store('utmHistory', `${this.generatedUrl}`);
    } else {
      this.storage.store('utmHistory', `${currentHistory},${this.generatedUrl}`);
    }
  }

  clearRecentStrings(): void {
    this.storage.clear('utmHistory');
    this.utmHistory = [];
    this.doomSayer.danger('Cleared UTM history');
  }

  parseUtmHistory(s): Array<string> {
    if (!s) { return []; }
    return (s.indexOf(',') !== -1) ? s.split(',') : [s];
  }

  notify() {
    this.doomSayer.info('Copied to clipboard');
  }

}
