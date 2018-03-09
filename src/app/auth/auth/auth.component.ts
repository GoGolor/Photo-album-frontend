import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  authForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.createForm();
  }

  createForm() {
    this.authForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.authService.auth(this.authForm.value)
      .subscribe(() => this.router.navigate(['']));
  }
}
