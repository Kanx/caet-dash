import { RequestOptions, Headers } from '@angular/http';
import * as convert from 'xml-js';
/**
 *  @RequestDigest() wraps SharePoint service functions in to a Promise that provides the HTTP call with a FormDigestRequest code.
 *  The code is a little messy and not overly intuitive, so these are being kept as experimental methods until I work out how
 *  to better-refactor these. As of writing this, there isn't any real support for Async decorators.
 */
export default function RequestDigest() {
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
