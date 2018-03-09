import { Injectable } from '@angular/core';
import { BaseDataService } from 'services/base-data.service';
import { FetchService } from 'services/fetch.service';

import { Client } from './clients.models';

@Injectable()
export class ClientsDataService extends BaseDataService<Client> {
  constructor(fetchService: FetchService) {
    super('/clients', fetchService);
  }
}
