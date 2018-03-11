import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ClientsDataService } from './clients.service';
import { BaseController } from '../base-controller';
import { Client } from './clients.models';
import { ClientsDialogComponent } from './clients-dialog.component';
import { ToastService } from '../services/toast.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  providers: [ClientsDataService]
})
export class ClientsComponent extends BaseController<Client> {
  displayedColumns = ['shortName', 'INN'];
  successMessage = this.translateService.instant('ENTRY_HAS_BEEN_SAVED');
  constructor(
    clientsDataService: ClientsDataService,
    toastService: ToastService,
    private dialog: MatDialog,
    private translateService: TranslateService
  ) {
    super(clientsDataService, toastService);
  }

  get newItem() {
    return { id: null, name: '', shortName: '', INN: '' };
  }

  openDialog(item) {
    return this.dialog.open(ClientsDialogComponent, {
      width: '400px',
      data: { item }
    });
  }
}
