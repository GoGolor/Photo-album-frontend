import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientsComponent } from './clients.component';
import { AuthGuard } from '../auth-guard.service';

export const routes: Routes = [
  {
    path: 'clients',
    canActivate: [AuthGuard],
    component: ClientsComponent
  }
];

export const routedComponents = [ClientsComponent];
