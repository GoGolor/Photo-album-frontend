import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate() {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      return this.authService.tryAuthenticate()
        .map(() => true)
        .catch(() => {
          this.router.navigate(['/auth']);
          return Observable.of(false);
        });
    }
  }
}
