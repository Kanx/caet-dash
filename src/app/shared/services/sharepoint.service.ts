import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http'; // Required to support XML response

import 'rxjs/add/operator/map';
import FetchRequestDigest from './request-digest.decorator';

@Injectable()
export class SharepointService {
  private api = environment.api;
  private headers = new HttpHeaders()
    .set('Accept', 'application/json;odata=verbose')
    .set('Content-Type', 'application/json;odata=verbose')
    .set('If-Match', '*');

  constructor(private http: HttpClient, private _http: Http) {}

  // LIST OPERATIONS

  getListItems(listName: string): Observable<ArrayBuffer> {
    return this.http.get(`${this.api}/web/lists/getByTitle('${listName}')/items`, { 'headers': this.headers });
  }

  getListItem(listName: string, listItemId: number): Observable<ArrayBuffer> {
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

  getAllDocumentsInFolder(folderName: string): Observable<ArrayBuffer> {
    return this.http.get(`${this.api}/web/GetFolderByServerRelativeUrl('${folderName}')/Files`,
      { 'headers': this.headers});
  }
}
