import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http'; // Required to support XML response

import * as convert from 'xml-js';

import 'rxjs/add/operator/map';
import {SharepointResponse} from '../sharepoint-response';

@Injectable()
export class SharepointService {
  private api = environment.api;
  private headers = new HttpHeaders()
    .set('Accept', 'application/json;odata=verbose')
    .set('Content-Type', 'application/json;odata=verbose')
    .set('If-Match', '*');

  constructor(private http: HttpClient, private _http: Http) {}

  // LIST OPERATIONS
  getListItems(listName: string): Observable<SharepointResponse> {
    return this.http.get(`${this.api}/web/lists/getByTitle('${listName}')/items`, { 'headers': this.headers });
  }

  getListItem(listName: string, listItemId: number): any {
    return this.http.get(`${this.api}/web/lists/getByTitle('${listName}')/items(${listItemId})`, { 'headers': this.headers});
  }

  @FetchRequestDigest()
  public createListItem(listName: string, data: object, requestDigest?): any {
    const payload = JSON.stringify(Object.assign(data, { __metadata: { 'type': `SP.Data.${listName}ListItem` }}));
    return this.http.post(`${this.api}/web/lists/getByTitle('${listName}')/items`,
      payload,
      { 'headers': this.headers.set('X-RequestDigest', requestDigest)});
  }

  @FetchRequestDigest()
  public updateListItem(listName: string, listItemId: number, data: object, requestDigest?): any {
    return this.http.put(`${this.api}/web/lists/getByTitle('${listName}')/items(${listItemId})`,
      JSON.stringify(Object.assign(data, {__metadata: {'type': 'SP.List'}})),
      {'headers': this.headers.set('X-RequestDigest', requestDigest)});
  }

  @FetchRequestDigest()
  public deleteListItem(listName: string, listItemId: number, requestDigest?): any {
    return this.http.delete(`${this.api}/web/lists/getByTitle('${listName}')/items(${listItemId})`,
      {'headers': this.headers.set('X-RequestDigest', requestDigest)});
  }

  // USER OPERATIONS
  getCurrentUser(): Observable<ArrayBuffer> {
    return this.http.get(`${this.api}/SP.UserProfiles.PeopleManager/GetMyProperties`,
      { 'headers': this.headers});
  }

  getUser(userId: string): Observable<ArrayBuffer> {
    return this.http.get(`${this.api}/SP.UserProfiles.PeopleManager/GetPropertiesFor(accountName=@v)?@v='europa\\${userId}'`,
      { 'headers': this.headers});
  }

  // DOCUMENT OPERATIONS
  getAllFilesAndFolders(folderName: string): Observable<ArrayBuffer> {
    return this.http
      .get(`${this.api}/web/Lists/GetByTitle('${folderName}')/Items?$expand=Folder,File&$select=Title,FileLeafRef,Folder/ServerRelativeUrl,File/ServerRelativeUrl,File/Author`,
      { 'headers': this.headers});
  }
}

/**
 *  @RequestDigest() wraps SharePoint service functions in to a Promise that provides the HTTP call with a FormDigestRequest code.
 *  The code is a little messy and not overly intuitive, so these are being kept as experimental methods until I work out how
 *  to better-refactor these. As of writing this, there isn't any real support for Async decorators.
 */

function FetchRequestDigest() {
  return function(target, key, descriptor) {
    const httpMethod = descriptor.value;
    descriptor.value = function(...args) {
      return new Promise(resolve => {
        const requestDigestHeaders = new Headers();
              requestDigestHeaders.append('Accept', 'text/xml;charset=utf-8');
        const requestOptions = new RequestOptions({ headers: requestDigestHeaders});
        this._http
          .post(`${this.api}/contextinfo`, { }, requestOptions)
          .map(requestDigest => requestDigest.text()).subscribe(requestDigest => {
          httpMethod.apply(this, args.concat([JSON.parse(convert.xml2json(requestDigest)).elements[0].elements[1].elements[0].text]))
            .subscribe(response => resolve(response));
        });
      });
    };
    return descriptor;
  };
}
