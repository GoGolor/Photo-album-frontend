import { Injectable } from '@angular/core';

import { FetchService } from './fetch.service';

@Injectable()
export abstract class BaseDataService<Item extends { id: number }> {
  constructor(
    public url: string,
    public fetchService: FetchService
  ) { }

  list(params = {}) {
    return this.fetchService.fetch<{ items: Item[], count: number }>(this.url, {
      params
    });
  }

  create(item: Item) {
    return this.fetchService.fetch<Item>(this.url, {
      method: 'POST',
      body: item
    });
  }

  get(id) {
    return this.fetchService.fetch<Item>(`${this.url}/${id}`);
  }

  update(item: Item) {
    return this.fetchService.fetch<Item>(`${this.url}/${item.id}`, {
      method: 'POST',
      body: item
    });
  }

  delete(id) {
    return this.fetchService.fetch<undefined>(`${this.url}/${id}`, {
      method: 'DELETE'
    });
  }
}
