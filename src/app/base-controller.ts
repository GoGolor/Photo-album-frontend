import { ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatPaginator, PageEvent } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { BaseDataService } from 'services/base-data.service';
import { ToastService } from './services/toast.service';

export abstract class BaseController<Item extends { id: number }> implements OnInit {
  count: number;
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageSource = new BehaviorSubject<number>(1);
  page$ = this.pageSource.asObservable();
  constructor(protected dataService: BaseDataService<Item>) { }

  ngOnInit() {
    this.page$
      .switchMap(page => this.dataService.list({ page }))
      .subscribe(({ count, items }) => {
        this.count = count;
        this.dataSource.data = items;
      });
  }

  handlePageChange(pageEvent: PageEvent) {
    this.pageSource.next(pageEvent.pageIndex + 1);
  }
}
