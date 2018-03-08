import { NgModule } from '@angular/core';
import { CookieModule } from 'ngx-cookie';

import { FetchService } from './fetch.service';
import { StorageService } from './storage.service';
import { ToastService } from './toast.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CookieModule.forChild(),
    HttpClientModule
  ],
  providers: [
    FetchService,
    StorageService,
    ToastService
  ]
})
export class ServicesModule {}
