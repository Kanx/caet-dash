import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UtmService} from '../utm.service';
import {Router} from '@angular/router';
import {ISource} from '../../shared/interfaces';
import {DoomsayerService} from '../../shared/doomsayer/doomsayer.service';

@Component({
  selector: 'app-utm-generator',
  templateUrl: './utm-generator.component.html',
  styleUrls: ['./utm-generator.component.scss']
})
export class UtmGeneratorComponent implements OnInit {
  utmForm: FormGroup;
  sources: any[];
  mediums: string[];
  campaigns: any[];
  contentList: any[];
  filteredSources: Array<ISource>;
  previousMedium = '';
  previousSource = '';
  generatedUrl: string;
  utmHistory: string[];
  constructor(
    private storage: LocalStorageService,
    private router: Router,
    private utmService: UtmService,
    private fb: FormBuilder,
    public doomSayer: DoomsayerService
  ) {}

  ngOnInit() {
    this.getDataFromService();


    this.utmForm = this.fb.group({
      url: ['',  Validators.compose([Validators.required, Validators.pattern('(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]\\.[^\\s]{2,})')])],
      medium: ['', Validators.required],
      source: [{ value: '', disabled: true }, Validators.required],
      campaign: ['', Validators.required],
      content: '',
      bid: ['']
    });

    this.utmService.updateService$.subscribe(data => {
      this.getDataFromService();
      this.utmForm.patchValue({'medium': ''});
    });

    this.utmForm.valueChanges.subscribe(val => {
      if (val.medium !== this.previousMedium) {
        this.filteredSources = this.sources.filter((source) => source.Medium === val.medium);
        this.previousMedium = val.medium;
        this.filteredSources.length ? this.utmForm.get('source').enable() : this.utmForm.get('source').disable();
      }

      if (val.source !== this.previousSource && val.source) {
        this.previousSource = val.source;
        this.utmForm.patchValue({
          bid: val.source.BID
          // formControlName2: myValue2 (can be omitted)
        });
      };

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

  generateUrl(): void {
    const baseUrlDelimiter = (this.utmForm.get('url').value.indexOf('?') === -1) ? '?' : '&';
    let utmString = this.utmForm.get('url').value +
      baseUrlDelimiter +
      `utm_medium=${this.utmForm.get('medium').value}&` +
      `utm_source=${this.utmForm.get('source').value.Title}&` +
      `utm_campaign=${this.utmForm.get('campaign').value}`;

    if (this.utmForm.get('content').value) {
      utmString += `&utm_content=${this.utmForm.get('content').value}`;
    }
    if (this.utmForm.get('bid').value) {
      utmString += `&bid=${this.utmForm.get('bid').value}`;
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
