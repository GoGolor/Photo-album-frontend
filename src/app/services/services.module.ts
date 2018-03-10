import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';
import { SharedModule } from '../shared/shared.module';

import { FetchService } from './fetch.service';
import { StorageService } from './storage.service';
import { ToastService } from './toast.service';

@NgModule({
  imports: [
    SharedModule,
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
