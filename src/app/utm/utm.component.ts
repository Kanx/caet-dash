import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {UtmService} from './utm.service';
import { Source} from './source.class';


@Component({
  selector: 'app-utm',
  templateUrl: './utm.component.html',
  styleUrls: ['./utm.component.scss']
})

export class UtmComponent implements OnInit {
  recentUtmStrings: Array<string>;
  utmForm: FormGroup;
  sources: any;
  mediums: Array<string>;
  campaigns: any;
  contentList: any;
  filteredSources: Array<Source>;
  previousMedium: string;
  generatedUrl: string;


  constructor(public utmService: UtmService, private fb: FormBuilder) {}

  ngOnInit() {
    this.mediums = [
      'organic social',
      'sponsored social',
      'ppc',
      'paid job board',
      'email',
      'aggregator job board',
      'display'
    ];

    this.utmService.getSources()
      .subscribe(data => {
        this.sources = data.d.results;
      });

    this.utmService.getCampaigns()
      .subscribe(data => {
        this.campaigns = data.d.results;

      });

    this.utmService.getContent()
      .subscribe(data => {
        this.contentList = data.d.results;
      });

    this.utmForm = this.fb.group({
      url: '',
      medium: '',
      source: {value: '', disabled: true },
      campaign: '',
      content: ''
    });

    this.utmForm.valueChanges.subscribe(val => {
      if (val.medium !== this.previousMedium) {
        this.filteredSources = this.sources.filter((source) => source.Medium === val.medium);
        this.previousMedium = val.medium;
        this.filteredSources.length ? this.utmForm.get('source').enable() : this.utmForm.get('source').disable();
      }
    });
  }


  generateUrl(): void {
    const urlDelimiter = (this.utmForm.get('url').value !== -1) ? '?' : '&';
    this.generatedUrl = `${this.utmForm.get('url').value}${urlDelimiter}&${this.utmForm.get('medium').value}&${this.utmForm.get('source').value}&${this.utmForm.get('campaign').value}`;
  }
}
