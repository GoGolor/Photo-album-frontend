import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  set<I>(key: string, val: I) {
    localStorage.setItem(key, JSON.stringify(val));
  }

  get<I>(key: string): I {
    return JSON.parse(localStorage.getItem(key));
  }

  clear() {
    localStorage.clear();
  }
}
