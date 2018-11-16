import {Component, Input, OnInit} from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UtmService} from '../utm.service';
import {Router} from '@angular/router';
import {ISource} from '../../shared/interfaces';
import {DoomsayerService} from '../../shared/doomsayer/doomsayer.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-utm-generator',
  templateUrl: './utm-generator.component.html',
  styleUrls: ['./utm-generator.component.scss']
})
export class UtmGeneratorComponent implements OnInit {
  utmForm: FormGroup;
  sources: Array<any>;
  mediums: Array<string>;
  campaigns: any[];
  contentList: any[];
  filteredSources: Array<ISource>;
  previousMedium = '';
  generatedUrl: string;
  utmHistory: string[];
  bidList: Array<any>;
  private _onDestroy = new Subject<void>();

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
      url: ['',  Validators.compose([
        Validators.required,
        Validators.pattern('(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]\\.[^\\s]{2,})')
      ])],
      medium: ['', Validators.required],
      source: [{ value: '', disabled: true }, Validators.required],
      campaign: ['', Validators.required],
      bidFilterCtrl: '',
      bid: '',
      content: ''
    });

    this.utmService.updateService$.subscribe(data => {
      this.getDataFromService();
      this.utmForm.patchValue({'medium': ''});
    });

    this.bidList = [{Title: 'Test', ID: 1}, {Title: 'gaz', ID: 2}];
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

    this.utmForm.get('bidFilterCtrl').valueChanges
      .debounceTime(500)
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        if(this.utmForm.get('bidFilterCtrl').value !== '') {
          this.filterBids();
        }
      });
  }
  clearForm() {
    this.utmForm.reset();
  }

  filterBids() {
    const search = this.utmForm.get('bidFilterCtrl').value;
    return this.utmService.getBidByTitle(search)
      .subscribe(data => this.bidList = data);
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
      `utm_source=${this.utmForm.get('source').value}&` +
      `utm_campaign=${this.utmForm.get('campaign').value}`;

    if (this.utmForm.get('content')) {
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
