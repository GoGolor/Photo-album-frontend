import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { JournalService } from '../journal.service';
import { JournalDataService } from '../journal.data-service';
import { JournalItem } from 'models/journal';
import { BaseController } from '../../base-controller';
import { AppJournalDialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  providers: [JournalService, JournalDataService],
  styleUrls: ['./journal.style.css']
})
export class JournalComponent extends BaseController<JournalItem> {
  displayedColumns = ['number', 'date', 'numberOfDocument', 'result', 'clientName', 'stateRegisterNumber', 'name'];
  constructor(
    private journalDataService: JournalDataService,
    private journalService: JournalService,
    public dialog: MatDialog
  ) {
    super(journalDataService);
  }

  openDialog(item: JournalItem) {
    this.dialog.open(AppJournalDialogComponent, {
      width: '250px',
      data: { item }
    });
  }
}
