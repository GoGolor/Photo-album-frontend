import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JournalComponent } from './journal/journal.component';
import { AuthGuard } from '../auth-guard.service';

export const appRoutes: Routes = [
  {
    path: 'journal',
    canActivate: [AuthGuard],
    component: JournalComponent
  }
];
