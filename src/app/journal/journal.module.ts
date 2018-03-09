import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { JournalComponent } from './journal/journal.component';
import { AppJournalDialogComponent } from './dialog/dialog.component';
import { ResultPipe } from './result.pipe';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    JournalComponent,
    AppJournalDialogComponent,
    ResultPipe
  ],
  entryComponents: [
    AppJournalDialogComponent
  ]
})
export class JournalModule {}
