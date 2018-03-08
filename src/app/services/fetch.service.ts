import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { CookieService } from 'ngx-cookie';
import { ToastService } from './toast.service';
import { environment } from 'environments/environment';

export interface FetchOptions {
  method?: 'GET' | 'PUT' | 'POST' | 'DELETE';
  body?: object;
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  additionalOptions?: object;
}

@Injectable()
export class FetchService {
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private toastService: ToastService
  ) { }

  fetch<Response>(url: string, options: FetchOptions = {}): Observable<Response> {
    const { method = 'GET', body, params } = options;
    const headers = this.getHeaders();
    return this.http.request<Response>(method, `${environment.baseUrl}${url}`, { body, params, headers });
  }

  getHeaders() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const token = this.cookieService.get('token');
    return token ? headers.set('Authorization', `Basic ${token}`) : headers;
  }
}
