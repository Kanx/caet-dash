import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http'; // Required to support XML response

import 'rxjs/add/operator/map';
import * as convert from 'xml-js';
import RequestDigest from './requestdigest.decorator';

@Injectable()
export class SharepointService {
  private api = environment.api;
  private headers = new HttpHeaders()
    .set('Accept', 'application/json;odata=verbose')
    .set('Content-Type', 'application/json;odata=verbose')
    .set('If-Match', '*');

  constructor(private http: HttpClient, private _http: Http) {}

  // Sharepoint returns FormDigestValue as part of an XML document, so we need to use Http as opposed to HttpClient (which defaults to JSON)
  private getRequestDigest(): Observable<any> {
    const requestDigestHeaders = new Headers();
          requestDigestHeaders.append('Accept', 'text/xml;charset=utf-8');

    const requestOptions = new RequestOptions({ headers: requestDigestHeaders});
    return this._http.post(`${this.api}/contextinfo`, { }, requestOptions);
  }

  getListItems(listName: string): Observable<ArrayBuffer> {
    return this.http.get(`${this.api}/web/lists/getByTitle('${listName}')/items`, { 'headers': this.headers});
  }

  getListItem(listName: string, listItemId: number): Observable<ArrayBuffer> {
    return this.http.get(`${this.api}/web/lists/getByTitle('${listName}')/items(${listItemId})`, { 'headers': this.headers});
  }

  createListItem(listName: string, data: object): Promise<any> {
    return new Promise((resolve) => {
      this.getRequestDigest().map(requestDigest => requestDigest.text()).subscribe(requestDigest => {
          const FormDigestValue = JSON.parse(convert.xml2json(requestDigest)).elements[0].elements[1].elements[0].text;
          const postHeaders = this.headers.set('X-RequestDigest', FormDigestValue);
          const payload = JSON.stringify(Object.assign(data, { __metadata: { 'type': `SP.Data.${listName}ListItem` }}));

          return this.http.post(`${this.api}/web/lists/getByTitle('${listName}')/items`,
            payload,
            { 'headers': postHeaders })
            .subscribe(resolve);
        });
    });
  }

  // TODO Refactor to use http.put instead of changing X-HTTP-Method header
  updateListItem(listName: string, listItemId: number, data: object): Promise<any> {
    return new Promise((resolve) => {
      this.getRequestDigest().map(requestDigest => requestDigest.text()).subscribe(requestDigest => {
          const FormDigestValue = JSON.parse(convert.xml2json(requestDigest)).elements[0].elements[1].elements[0].text;
          const updateListItemHeaders = this.headers.set('X-RequestDigest', FormDigestValue).set('X-HTTP-Method', 'MERGE');

          this.http.post(`${this.api}/web/lists/getByTitle('${listName}')/items(${listItemId})`,
            JSON.stringify(Object.assign(data, { __metadata: { 'type': 'SP.List' }})),
            { 'headers': updateListItemHeaders })
            .subscribe(resolve);
        });
    });
  }

  deleteListItem(listName: string, listItemId: number): Promise<any> {
    return new Promise((resolve) => {
      this.getRequestDigest().map(requestDigest => requestDigest.text()).subscribe(requestDigest => {
          const payload = JSON.stringify({ __metadata: { 'type': 'SP.List' }});
          const FormDigestValue = JSON.parse(convert.xml2json(requestDigest)).elements[0].elements[1].elements[0].text;
          const updateListItemHeaders = this.headers.set('X-RequestDigest', FormDigestValue).set('X-HTTP-Method', 'DELETE');

          this.http.post(`${this.api}/web/lists/getByTitle('${listName}')/items(${listItemId})`,
            payload,
            { 'headers': updateListItemHeaders })
            .subscribe(resolve);
        });
    });
  }

  /**
   *  @RequestDigest() wraps SharePoint service functions in to a Promise that provides the HTTP call with a FormDigestRequest code.
   *  The code is a little messy and not overly intuitive, so these are being kept as experimental methods until I work out how
   *  to better-refactor these.
   */

  @RequestDigest()
  public ___createListItem(listName: string, data: object, requestDigest?): any {
    const postHeaders = this.headers.set('X-RequestDigest', requestDigest);
    const payload = JSON.stringify(Object.assign(data, { __metadata: { 'type': `SP.Data.${listName}ListItem` }}));
    return this.http.post(`${this.api}/web/lists/getByTitle('${listName}')/items`, payload , { 'headers': postHeaders });
  }

  @RequestDigest()
  public ___updateListItem(listName: string, listItemId: number, data: object, requestDigest?): any {
    const updateListItemHeaders = this.headers.set('X-RequestDigest', requestDigest).set('X-HTTP-Method', 'MERGE');
    return this.http.post(`${this.api}/web/lists/getByTitle('${listName}')/items(${listItemId})`,
      JSON.stringify(Object.assign(data, {__metadata: {'type': 'SP.List'}})),
      {'headers': updateListItemHeaders});
  }
}
