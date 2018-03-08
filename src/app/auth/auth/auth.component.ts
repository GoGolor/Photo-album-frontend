import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  public login = '';
  public password = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    console.log(`Login: ${this.login}, password: ${this.password}`);
    this.authService.auth({ login: this.login, password: this.password });
  }
}
