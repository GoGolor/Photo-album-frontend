import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { JournalItem } from 'models/journal';

@Component({
  selector: 'app-journal-dialog-component',
  templateUrl: './dialog.component.html'
})
export class AppJournalDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AppJournalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: JournalItem
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
