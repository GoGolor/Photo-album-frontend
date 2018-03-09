import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ClientsDataService } from './clients.service';
import { BaseController } from '../base-controller';
import { Client } from './clients.models';
import { ClientsDialogComponent } from './clients-dialog.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  providers: [ClientsDataService]
})
export class ClientsComponent extends BaseController<Client> {
  displayedColumns = ['shortName', 'INN'];
  constructor(
    clientsDataService: ClientsDataService,
    private dialog: MatDialog
  ) {
    super(clientsDataService);
  }

  create() {
    const client = { id: null, name: '', shortName: '', INN: '' };
    this.openDialog(client);
  }

  openDialog(item: Client) {
    this.dialog.open(ClientsDialogComponent, {
      width: '400px',
      data: { item }
    })
      .afterClosed()
      .filter((client: Client) => client != null)
      .switchMap((client: Client) => {
        return client.id == null ?
          this.dataService.create(client) :
          this.dataService.update(client);
      })
      .subscribe(
        () => { },
        error => console.error(error)
      );
  }
}
