import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Client } from './clients.models';

@Component({
  selector: 'app-client-dialog',
  templateUrl: './clients-dialog.component.html'
})
export class ClientsDialogComponent {
  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ClientsDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { item: Client }
  ) {
    this.form = fb.group({
      id: data.item.id == null ? null : data.item.id,
      name: [data.item.name || '', Validators.required],
      shortName: [data.item.shortName || '', Validators.required],
      INN: [data.item.INN || '', Validators.required]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.form.value);
  }
}
