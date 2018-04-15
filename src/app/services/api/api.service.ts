import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment as env } from '../../../environments/environment';

@Injectable()
export class ApiService {
    constructor(private _http: HttpClient) {}

    /**
     * GET request to API
     * @param url
     * @returns {Observable<R>}
     */
    get(url: string) {
        return this.request(url, 'GET');
    }

    /**
     * POST request to API
     * @param url
     * @param body
     * @returns {Observable<R>}
     */
    post(url: string, body?: any) {
        return this.request(url, 'POST', body || null);
    }

    /**
     * PUT request to API
     * @param url
     * @param body
     * @returns {Observable<R|T>}
     */
    put(url: string, body?: any) {
        return this.request(url, 'PUT', body || null);
    }

    /**
     * DELETE request to API
     * @param url
     * @returns {Observable<R|T>}
     */
    delete(url: string) {
        return this.request(url, 'DELETE');
    }

    /**
     * Upload request to API
     * @param url
     * @param data
     * @returns {Observable<R>}
     */
    upload(url: string, data: FormData) {
        return this.request(url, 'POST', data, true);
    }

    /**
     * Update request to API (multipart version)
     * @param url
     * @param data
     * @returns {Observable<R|T>}
     */
    update(url: string, data: FormData) {
        return this.request(url, 'PUT', data, true);
    }

    /**
     * HTTP request template
     * @param url
     * @param method
     * @param body
     * @param upload
     * @returns {Observable<R|T>}
     */
    request(url: string, method: string, body: any = null, upload: boolean = false) {
        let headers: HttpHeaders = new HttpHeaders();
        if (!upload) {
            headers = headers.append('Content-Type', 'application/json');
        }
        headers = headers.append('x-api-key', env.API_KEY);
        const options: any = {
            headers,
            responseType: 'json'
        };
        if (body) {
            options.body = body;
        }

        return this._http.request(method, `${env.API_URL}/dev/${url}`, options).pipe(
            catchError((errRes: any) => {
                return Observable.throw(errRes);
            })
        );
    }
}
