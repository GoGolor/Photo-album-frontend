import { ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatPaginator, PageEvent, MatDialog } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { BaseDataService } from 'services/base-data.service';
import { ToastService } from './services/toast.service';

export abstract class BaseController<Item extends { id: number }> implements OnInit {
  abstract newItem: Item;
  abstract displayedColumns: string[];
  abstract successMessage: string;
  count: number;
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageSource = new BehaviorSubject<number>(1);
  private page$ = this.pageSource.asObservable();
  searchSource = new BehaviorSubject<string>('');
  private search$ = this.searchSource.asObservable();
  constructor(
    protected dataService: BaseDataService<Item>,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.page$.combineLatest(
      this.search$,
      (page, search) => {
        let params = {};
        if (page) {
          params = { ...params, page };
        }
        if (search) {
          params = { ...params, search };
        }
        return params;
      }
    )
      .switchMap(params => this.dataService.list(params))
      .subscribe(({ count, items }) => {
        this.count = count;
        this.dataSource.data = items;
      });
  }

  handlePageChange(pageEvent: PageEvent) {
    this.pageSource.next(pageEvent.pageIndex + 1);
  }

  onSearch(searchString) {
    this.searchSource.next(searchString);
  }

  abstract openDialog(item: Item);

  create() {
    this.edit(this.newItem);
  }

  edit(itemToSave: Item) {
    this.openDialog(itemToSave)
      .afterClosed()
      .filter((item: Item) => item != null)
      .switchMap((item: Item) => {
        return item.id == null ?
          this.dataService.create(item) :
          this.dataService.update(item);
      })
      .subscribe(
        () => this.toastService.showSuccess(this.successMessage),
        error => this.toastService.showError(error.message)
      );
  }
}
