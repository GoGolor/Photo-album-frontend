import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { routes as clientsRoutes } from '../clients/clients-routing.module';
import { AuthGuard } from '../auth-guard.service';

import { appRoutes as journalRoutes } from '../journal/journal-routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'journal', pathMatch: 'full' },
  { path: '', component: MainComponent, canActivate: [AuthGuard], children: [
    ...clientsRoutes,
    ...journalRoutes
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }

export const routedComponents = [MainComponent];
