
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import * as moment from 'moment';

import { FetchService } from 'services/fetch.service';
import { StorageService } from 'services/storage.service';
import { User } from 'models/user';

@Injectable()
export class AuthService {
  public currentUser: User;
  constructor(
    private fetchService: FetchService,
    private cookieService: CookieService,
    private storageService: StorageService,
    private router: Router
  ) { }

  auth({ login, password }) {
    return this.fetchService.fetch<{ user: User, token: string }>('/login', {
      method: 'POST',
      body: { login, password }
    })
      .subscribe(({ user, token }) => {
        this.saveToken(token);
        this.setCurrentUser(user);
      });
  }

  tryAuthenticate() {
    return this.fetchService.fetch<User>('/users/current')
      .do(this.setCurrentUser.bind(this));
  }

  isAuthenticated() {
    return this.currentUser != null;
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }

  logout() {
    this.removeToken();
    this.setCurrentUser(null);
    this.storageService.clear();
    this.router.navigate(['/auth']);
  }

  getToken() {
    return this.cookieService.get('token');
  }

  saveToken(token: string) {
    const expires = moment().add(7, 'days').toDate();
    this.cookieService.put('token', token, { expires });
  }

  removeToken() {
    this.cookieService.remove('token');
  }

  clearToken() {
    this.removeToken();
    this.setCurrentUser(null);
  }
}
