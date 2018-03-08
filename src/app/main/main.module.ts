import { NgModule } from '@angular/core';
import { SharedModule } from 'shared-module';

import { MainRoutingModule, routedComponents } from './main-routing.module';

@NgModule({
  imports: [
    MainRoutingModule,
    SharedModule
  ],
  declarations: [...routedComponents]
})
export class MainModule { }
