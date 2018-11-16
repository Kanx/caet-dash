import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import 'rxjs/Rx';

import { Http, Headers, RequestOptions } from '@angular/http'; // Required to support XML response
import * as convert from 'xml-js';

/**
 *  @RequestDigest() wraps SharePoint service functions in to an Observable that provides the HTTP call with a FormDigestRequest code.
 *  The code is a little messy and not overly intuitive, so these are being kept as experimental methods until I work out how
 *  to better-refactor these. As of writing this, there isn't any real support for Async decorators.
 */

function FetchRequestDigest(): any {
  return function(target, key, descriptor): Observable<any>  {
    const targetHttpMethod = descriptor.value;
    descriptor.value = function(...targetArgs) {
      return Observable.create(observer => {
        const requestDigestHeaders = new Headers();
        requestDigestHeaders.append('Accept', 'text/xml;charset=utf-8');

        const requestOptions = new RequestOptions({ headers: requestDigestHeaders});
        this._http.post(`${this.api}/contextinfo`, {}, requestOptions)
          .map(requestDigest => requestDigest.text()).subscribe(requestDigest => {
          targetHttpMethod.apply(this, targetArgs.concat([JSON.parse(convert.xml2json(requestDigest)).elements[0].elements[1].elements[0].text]))
            .subscribe(response => {
              if (response) {
                observer.next(response.d); // Update and Create requests return a copy of the modified/generated item
              } else {
                observer.next(); // Delete requests return null/undefined
              }
              observer.complete();
            }, observer.error);
        });
      });
    };
    return descriptor;
  };
}

@Injectable()
export class SharepointService {
  private siteUsers = {};
  private api = environment.api;
  private headers = new HttpHeaders()
    .set('Accept', 'application/json;odata=verbose')
    .set('Content-Type', 'application/json;odata=verbose')
    .set('If-Match', '*');

  public pickAuthor = 'Author/ID,Author/Title';
  public pickCreated = 'Created';
  public pickModified = 'Modified';

  constructor(private http: HttpClient,
              private _http: Http) {}

  // LIST OPERATIONS
  getListItems(listName: string, selectBy?: string, expandBy?: string, limitTo?: number): Observable<any> {
    let viewFields =  `?$select=${this.pickAuthor},${this.pickCreated},${this.pickModified}${(selectBy) ? ',' + selectBy : '' }`
    viewFields += `&$expand=${this.pickAuthor}${(expandBy) ? ',' + expandBy : '' }`;
    if (limitTo) { viewFields += `&top=${limitTo}`; }
    return this.http.get(`${this.api}/web/lists/getByTitle('${listName}')/items${viewFields}`, { 'headers': this.headers });
  }

  getListItem(listName: string, query: string, selectBy?: string, expandBy?: string): any {
    let viewFields =  `?$filter=${query}`;
    viewFields +=  `&$select=${this.pickAuthor},${this.pickCreated},${this.pickModified}${(selectBy) ? ',' + selectBy : '' }`;
    viewFields += `&$expand=${this.pickAuthor}${(expandBy) ? ',' + expandBy : '' }`;
    return this.http.get(`${this.api}/web/lists/getByTitle('${listName}')/items${viewFields}`, { 'headers': this.headers});
  }

  getListItemById(listName: string, listItemId: number, selectBy?: string, expandBy?: string): any {
    let viewFields =  `?$select=${this.pickAuthor},${this.pickCreated},${this.pickModified}${(selectBy) ? ',' + selectBy : '' }`
    viewFields += `&$expand=${this.pickAuthor}${(expandBy) ? ',' + expandBy : '' }`;
    return this.http.get(`${this.api}/web/lists/getByTitle('${listName}')/items(${listItemId})${viewFields}`, { 'headers': this.headers});
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
    return this.http.post(`${this.api}/web/lists/getByTitle('${listName}')/items(${listItemId})`,
      JSON.stringify(Object.assign(data, { __metadata: { 'type': `SP.Data.${listName}ListItem` }})),
      {'headers': this.headers.set('X-RequestDigest', requestDigest).set('X-HTTP-Method', 'MERGE')});
  }

  @FetchRequestDigest()
  public deleteListItem(listName: string, listItemId: number, requestDigest?): any {
    return this.http.delete(`${this.api}/web/lists/getByTitle('${listName}')/items(${listItemId})`,
      {'headers': this.headers.set('X-RequestDigest', requestDigest), responseType: 'text'});
  }

  // USER OPERATIONS
  getCurrentUser(): Observable<any>  {
    return this.http.get(`${this.api}/SP.UserProfiles.PeopleManager/GetMyProperties`,
      { 'headers': this.headers });
  }

  getUserByRacf(racf: string): Observable<any> {
    return this.http.get(`${this.api}/SP.UserProfiles.PeopleManager/GetPropertiesFor(accountName=@v)?@v='europa\\${racf}'`,
      { 'headers': this.headers });
  }

  getUserById(userId): Observable<any>  {
    return this.http.get(`${this.api}/web/GetUserById(${userId})`,
      { 'headers': this.headers });
  }

  getAllFilesAndFolders(folderName: string): any {
    return this.http
      .get(`${this.api}/web/GetFolderByServerRelativeUrl('${folderName}')?$expand=Folders,Files,Folders/Folders/Files,Folders/Folders/Folders/Files,Folders/Folders/Folders/Folders/Files`,
        { 'headers': this.headers });
  }
}


