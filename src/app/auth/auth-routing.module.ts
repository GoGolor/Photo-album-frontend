import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class AuthRoutingModule { }
