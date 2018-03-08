import { Injectable } from '@angular/core';

import { BaseDataService } from 'services/base-data.service';
import { FetchService } from 'services/fetch.service';
import { StorageService } from 'services/storage.service';
import { JournalItem } from 'models/journal';

@Injectable()
export class JournalDataService extends BaseDataService<JournalItem> {
  constructor(
    fetchService: FetchService,
    private storageService: StorageService
  ) {
    super('/journal', fetchService);
  }

  setLastSaved(journal) {
    this.storageService.set('journal2', journal);
  }

  getLastSaved() {
    return this.storageService.get<JournalItem>('journal2') || {};
  }

  getUnfitnessNoticeNumber() {
    return this.fetchService.fetch<number>(`${this.url}/getUnfitnessNoticeNumber`);
  }

  getVerificationCertificateNumber() {
    return this.fetchService.fetch<number>(`${this.url}/getVerificationCertificateNumber`);
  }
}
