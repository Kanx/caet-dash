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

  /**
   *  @RequestDigest() wraps SharePoint service functions in to a Promise that provides the HTTP call with a FormDigestRequest code.
   *  The code is a little messy and not overly intuitive, so these are being kept as experimental methods until I work out how
   *  to better-refactor these.
   */

  @RequestDigest()
  public createListItem(listName: string, data: object, requestDigest?): any {
    const payload = JSON.stringify(Object.assign(data, { __metadata: { 'type': `SP.Data.${listName}ListItem` }}));
    return this.http.post(`${this.api}/web/lists/getByTitle('${listName}')/items`,
      payload,
      { 'headers': this.headers.set('X-RequestDigest', requestDigest)});
  }

  @RequestDigest()
  public updateListItem(listName: string, listItemId: number, data: object, requestDigest?): any {
    return this.http.put(`${this.api}/web/lists/getByTitle('${listName}')/items(${listItemId})`,
      JSON.stringify(Object.assign(data, {__metadata: {'type': 'SP.List'}})),
      {'headers': this.headers.set('X-RequestDigest', requestDigest)});
  }

  @RequestDigest()
  public deleteListItem(listName: string, listItemId: number, requestDigest?): any {
    return this.http.delete(`${this.api}/web/lists/getByTitle('${listName}')/items(${listItemId})`,
      {'headers': this.headers.set('X-RequestDigest', requestDigest)});
  }
}


// createListItem(listName: string, data: object): Promise<any> {
//   return new Promise((resolve) => {
//     this.getRequestDigest()
//         .map(requestDigest => requestDigest.text())
//         .subscribe(requestDigest => {
//           const FormDigestValue = JSON.parse(convert.xml2json(requestDigest)).elements[0].elements[1].elements[0].text;
//           const payload = JSON.stringify(Object.assign(data, { __metadata: { 'type': `SP.Data.${listName}ListItem` }}));
//
//           return this.http.post(`${this.api}/web/lists/getByTitle('${listName}')/items`,
//             payload,
//             { 'headers': this.headers.set('X-RequestDigest', FormDigestValue) })
//             .subscribe(resolve);
//         });
//   });
// }
//
// updateListItem(listName: string, listItemId: number, data: object): Promise<any> {
//   return new Promise((resolve) => {
//     this.getRequestDigest()
//         .map(requestDigest => requestDigest.text())
//         .subscribe(requestDigest => {
//           const FormDigestValue = JSON.parse(convert.xml2json(requestDigest)).elements[0].elements[1].elements[0].text;
//           this.http.put(`${this.api}/web/lists/getByTitle('${listName}')/items(${listItemId})`,
//             JSON.stringify(Object.assign(data, { __metadata: { 'type': 'SP.List' }})),
//             { 'headers': this.headers.set('X-RequestDigest', FormDigestValue) })
//             .subscribe(resolve);
//         });
//   });
// }
//
// deleteListItem(listName: string, listItemId: number): Promise<any> {
//   return new Promise((resolve) => {
//     this.getRequestDigest()
//         .map(requestDigest => requestDigest.text())
//         .subscribe(requestDigest => {
//           const FormDigestValue = JSON.parse(convert.xml2json(requestDigest)).elements[0].elements[1].elements[0].text;
//
//           this.http.delete(`${this.api}/web/lists/getByTitle('${listName}')/items(${listItemId})`,
//             { 'headers': this.headers.set('X-RequestDigest', FormDigestValue) })
//             .subscribe(resolve);
//         });
//   });
// }
