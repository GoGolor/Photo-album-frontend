import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SearchComponent } from './search/search.component';

const components = [
  SearchComponent
];

@NgModule({
  imports: [
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: components,
  exports: components
})
export class SharedComponentsModule { }
