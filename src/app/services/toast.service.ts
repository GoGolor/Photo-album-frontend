import { Injectable } from '@angular/core';

@Injectable()
export class ToastService {
  showError(error: string) {
    console.log(error);
  }

  showSuccess(text: string) {
    console.log(`Success: ${text}`);
  }
}
