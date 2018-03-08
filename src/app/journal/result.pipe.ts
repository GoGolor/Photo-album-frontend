import { Pipe, PipeTransform } from '@angular/core';
import { JournalItem } from 'models/journal';

@Pipe({ name: 'result' })
export class ResultPipe implements PipeTransform {
  transform(item: JournalItem): string {
    if (!item) {
      return '';
    }
    if (item.hasMark || item.varificationCertificateNumber) {
      return 'Годен';
    }
    if (item.unfitnessNoticeNumber) {
      return 'Не годен';
    }
  }
}
