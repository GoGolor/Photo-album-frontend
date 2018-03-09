import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from './material.module';

const modules = [
  CommonModule,
  FlexLayoutModule,
  FormsModule,
  MaterialModule,
  ReactiveFormsModule,
  TranslateModule,
];

@NgModule({
  imports: modules,
  exports: modules
})
export class SharedModule { }
