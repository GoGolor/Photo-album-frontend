import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ToastService {
  private duration = 3000;
  constructor(private snackBar: MatSnackBar) { }
  showError(error: string) {
    this.snackBar.open(error, null, {
      duration: this.duration,
      panelClass: 'error-toast',
      horizontalPosition: 'left'
    });
  }

  showSuccess(text: string) {
    this.snackBar.open(text, null, {
      duration: this.duration,
      panelClass: 'success-toast',
      horizontalPosition: 'left'
    });
  }
}
