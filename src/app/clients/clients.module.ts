import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ClientsComponent } from './clients.component';
import { ClientsDialogComponent } from './clients-dialog.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ClientsComponent,
    ClientsDialogComponent
  ],
  entryComponents: [
    ClientsDialogComponent
  ]
})
export class ClientsModule { }
