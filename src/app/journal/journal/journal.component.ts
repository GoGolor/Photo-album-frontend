import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

import { JournalService } from '../journal.service';
import { JournalDataService } from '../journal.data-service';
import { JournalItem } from 'models/journal';
import { BaseController } from '../../base-controller';
import { AppJournalDialogComponent } from '../dialog/dialog.component';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  providers: [JournalService, JournalDataService]
})
export class JournalComponent extends BaseController<JournalItem> {
  displayedColumns = ['number', 'date', 'numberOfDocument', 'result', 'clientName', 'stateRegisterNumber', 'name'];
  successMessage = this.translateService.instant('ITEM_HAS_BEEN_SAVED');
  constructor(
    journalDataService: JournalDataService,
    toastService: ToastService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private journalService: JournalService,
  ) {
    super(journalDataService, toastService);
  }

  openDialog(item: JournalItem) {
    this.dialog.open(AppJournalDialogComponent, {
      width: '250px',
      data: { item }
    });
  }

  get newItem() {
    return {
      clientName: null,
      date: null,
      dateOfIssue: null,
      hasMark: null,
      id: null,
      inspectorId: null,
      inspectorName: null,
      name: null,
      number: null,
      stateRegisterNumber: null,
      unfitnessNoticeNumber: null,
      unfitnessReason: null,
      varificationCertificateNumber: null
    };
  }
}
